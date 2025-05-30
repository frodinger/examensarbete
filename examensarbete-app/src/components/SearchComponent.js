import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, Alert, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const SearchSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .min(2, 'Söktermen måste vara minst 2 tecken')
    .max(50, 'Söktermen får inte överstiga 50 tecken')
    .required('Vänligen ange en sökterm')
    .matches(/^[a-zA-ZåäöÅÄÖ0-9\s.,-]+$/, 'Endast bokstäver, siffror och vanliga skiljetecken tillåts')
});

const SearchComponent = ({ isCompact = false }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [pageContent, setPageContent] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [statusMessage, setStatusMessage] = useState('');
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const resultRefs = useRef([]);
  const currentMarkers = useRef([]);

  // Indexera sidans innehåll vid komponentmontering
  useEffect(() => {
    indexPageContent();
    
    // Återindexera när innehåll ändras (t.ex. dynamiskt innehåll)
    window.addEventListener('contentUpdated', indexPageContent);
    
    return () => {
      window.removeEventListener('contentUpdated', indexPageContent);
      removeAllHighlights();
    };
  }, []);

  // Återställ vald index när sökresultaten ändras
  useEffect(() => {
    setSelectedIndex(-1);
    resultRefs.current = [];
    
    // Sätt statusmeddelande för skärmläsare
    if (searchResults) {
      const count = searchResults.count;
      const term = searchResults.term;
      
      if (count === 0) {
        setStatusMessage(`Inga resultat hittades för "${term}"`);
      } else if (count === 1) {
        setStatusMessage(`1 resultat hittades för "${term}"`);
      } else {
        setStatusMessage(`${count} resultat hittades för "${term}"`);
      }
    }
  }, [searchResults]);

  // Funktion för att hantera keydown på sökformuläret
  const handleKeyDown = (event) => {
    if (!showResults || !searchResults || searchResults.count === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prevIndex => {
          const newIndex = prevIndex < searchResults.items.length - 1 ? prevIndex + 1 : 0;
          // Skrolla till det valda elementet
          if (resultRefs.current[newIndex]) {
            resultRefs.current[newIndex].scrollIntoView({ block: 'nearest' });
          }
          return newIndex;
        });
        break;

      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prevIndex => {
          const newIndex = prevIndex > 0 ? prevIndex - 1 : searchResults.items.length - 1;
          // Skrolla till det valda elementet
          if (resultRefs.current[newIndex]) {
            resultRefs.current[newIndex].scrollIntoView({ block: 'nearest' });
          }
          return newIndex;
        });
        break;

      case 'Enter':
        // Om ett sökresultat är markerat, navigera till det
        if (selectedIndex >= 0 && selectedIndex < searchResults.items.length) {
          event.preventDefault();
          const selectedResult = searchResults.items[selectedIndex];
          navigateToSection(selectedResult.section, searchResults.term);
        }
        break;

      case 'Escape':
        event.preventDefault();
        setShowResults(false);
        // Fokusera på sökfältet igen när resultaten stängs
        searchInputRef.current?.focus();
        break;

      case 'Tab':
        // Om Tab-tangenten trycks och vi har resultat, behåll dropdown öppen
        if (searchResults && searchResults.count > 0) {
          setShowResults(true);
        }
        break;

      default:
        break;
    }
  };

  // Funktion för att extrahera textinnehåll från sidan och skapa ett sökindex
  const indexPageContent = () => {
    const sections = [
      { id: 'introduction', title: 'Introduktion', selector: '#introduction' },
      { id: 'background', title: 'Bakgrund', selector: '#background' },
      { id: 'goals', title: 'Mål', selector: '#goals' },
      { id: 'target-group', title: 'Målgrupp', selector: '#target-group' },
      { id: 'method', title: 'Metod', selector: '#method' },
      { id: 'results', title: 'Resultat', selector: '#results' },
      { id: 'reflection', title: 'Reflektion', selector: '#reflection' }
    ];
    
    const contentIndex = [];
    
    // Indexera varje sektion
    sections.forEach(section => {
      const sectionElement = document.querySelector(section.selector);
      
      if (sectionElement) {
        // Extrahera alla text från sektionen
        const textContent = sectionElement.textContent || '';
        
        // Hitta underrubriker i sektionen
        const headings = sectionElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        if (headings.length > 0) {
          // Om det finns underrubriker, indexera varje del separat
          headings.forEach((heading, index) => {
            const headingId = heading.id || `${section.id}-heading-${index}`;
            const headingText = heading.textContent || '';
            
            // Hitta innehåll som tillhör denna rubrik
            let contentText = '';
            let currentNode = heading.nextElementSibling;
            
            // Samla text fram till nästa rubrik eller slutet av sektionen
            while (currentNode && 
                  !['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(currentNode.tagName) &&
                  currentNode.closest(section.selector)) {
              contentText += ' ' + (currentNode.textContent || '');
              currentNode = currentNode.nextElementSibling;
            }
            
            contentIndex.push({
              id: headingId,
              title: headingText,
              content: contentText,
              section: section.id,
              sectionTitle: section.title
            });
          });
        } else {
          // Om inga underrubriker, indexera hela sektionen
          contentIndex.push({
            id: section.id,
            title: section.title,
            content: textContent,
            section: section.id,
            sectionTitle: section.title
          });
        }
      }
    });
    
    // Spara indexet i state
    setPageContent(contentIndex);
  };

  const handleSearch = (values, { setSubmitting, resetForm }) => {
    setIsSearching(true);
    setShowResults(true);
    setSelectedIndex(-1);
    setStatusMessage('Söker...');
    
    setTimeout(() => {
      const term = values.searchTerm.toLowerCase();
      
      // Sök i indexerat innehåll
      const results = pageContent.filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.content.toLowerCase().includes(term)
      );
      
      // Sortera resultat efter relevans
      results.sort((a, b) => {
        // Rubriker har högre prioritet än innehåll
        const aInTitle = a.title.toLowerCase().includes(term);
        const bInTitle = b.title.toLowerCase().includes(term);
        
        if (aInTitle && !bInTitle) return -1;
        if (!aInTitle && bInTitle) return 1;
        
        // Prioritera kortare delar (mer specifika träffar)
        return a.content.length - b.content.length;
      });
      
      setSearchResults({
        term: values.searchTerm,
        count: results.length,
        items: results
      });
      
      // Återställ ref-arrayen för resultatelement
      resultRefs.current = results.map(() => null);
      
      setIsSearching(false);
      setSubmitting(false);
    }, 300); // Minskad fördröjning för bättre användarupplevelse
  };

  // Ta bort alla tidigare markeringar
  const removeAllHighlights = () => {
    // Ta bort alla span-element med klassen word-highlight
    const highlights = document.querySelectorAll('.word-highlight');
    highlights.forEach(highlight => {
      const parent = highlight.parentNode;
      if (parent) {
        // Ersätt span med dess textinnehåll
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        // Normalisera för att slå ihop intilliggande textnoder
        parent.normalize();
      }
    });

    // Radera även från ref-arrayen
    currentMarkers.current = [];
  };

  // Funktion för att markera specifika ord i texten
  const highlightSearchTerms = (term) => {
    // Ta bort tidigare markeringar först
    removeAllHighlights();
    
    if (!term || term.length < 2) return;
    
    // Konvertera till lowercase för case-insensitive sökning
    const searchTerm = term.toLowerCase();
    
    // Helper funktion för att kolla om en nod bör ignoreras (script, style, etc)
    const shouldIgnoreNode = (node) => {
      if (!node || !node.tagName) return false;
      
      const tagName = node.tagName.toLowerCase();
      return ['script', 'style', 'noscript', 'iframe', 'object', 'video', 'audio'].includes(tagName);
    };
    
    // Rekursiv funktion för att gå igenom alla textnoder
    const processNode = (node) => {
      // Om noden är ett textelement
      if (node.nodeType === Node.TEXT_NODE) {
        const nodeText = node.textContent.toLowerCase();
        
        // Om texten innehåller söktermen
        if (nodeText.includes(searchTerm)) {
          const parent = node.parentNode;
          
          // Ignorera om föräldern redan är en sökhighlight eller bör ignoreras
          if (parent.classList?.contains('word-highlight') || 
              shouldIgnoreNode(parent)) {
            return;
          }
          
          // Skapa ett nytt element som ersätter den befintliga textnoden
          const text = node.textContent;
          const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
          
          // HTML-fragment med markerade ord
          const fragment = document.createDocumentFragment();
          
          // Dela upp texten baserat på söktermen
          const parts = text.split(regex);
          
          parts.forEach(part => {
            // Om den överensstämmer med söktermen, markera den
            if (part.toLowerCase() === searchTerm) {
              const span = document.createElement('span');
              span.className = 'word-highlight';
              span.textContent = part;
              fragment.appendChild(span);
              currentMarkers.current.push(span);
            } else if (part.length > 0) {
              // Annars lägg till text som vanligt
              fragment.appendChild(document.createTextNode(part));
            }
          });
          
          // Ersätt den ursprungliga textnoden med vårt nya fragment
          parent.replaceChild(fragment, node);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE && !shouldIgnoreNode(node)) {
        // Fortsätt rekursivt genom andra element (om de inte ska ignoreras)
        Array.from(node.childNodes).forEach(processNode);
      }
    };
    
    // Starta med body-elementet och gå igenom alla noder
    try {
      processNode(document.body);
      
      // Skrolla till första markerade ordet om det finns
      if (currentMarkers.current.length > 0) {
        setTimeout(() => {
          currentMarkers.current[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 100);
      }
    } catch (error) {
      console.error('Ett fel uppstod vid markering av söktermer:', error);
    }
  };
  
  // Hjälpfunktion för att escapa specialtecken i regex
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  // Navigera till ett element på sidan och markera sökord
  const navigateToSection = (elementId, searchTerm) => {
    // Stäng dropdown när användaren navigerar till ett resultat
    setShowResults(false);
    
    const section = document.getElementById(elementId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Markera elementet temporärt för att göra det tydligare
      section.classList.add('highlight-search-result');
      setTimeout(() => {
        section.classList.remove('highlight-search-result');
      }, 3000);
      
      // Markera specifika sökord
      if (searchTerm) {
        setTimeout(() => {
          highlightSearchTerms(searchTerm);
        }, 300); // Liten fördröjning för att låta scroll hända först
      }
    } else {
      // Om elementet inte har ett ID, navigera till sektion det tillhör
      console.log('Kunde inte hitta exakt element, navigerar till sektion:', elementId);
      const sectionId = elementId.split('-')[0];
      const sectionElement = document.getElementById(sectionId);
      
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        
        // Markera specifika sökord även här
        if (searchTerm) {
          setTimeout(() => {
            highlightSearchTerms(searchTerm);
          }, 300);
        }
      }
    }
  };

  // Hantera fokus på sökfältet
  const handleFocus = () => {
    if (searchResults) {
      setShowResults(true);
    }
  };

  // Specifik hantering av blur för att stänga dropdown
  const handleBlur = (e) => {
    // Vi behöver använda en timeout för att låta klickevent på dropdown hända först
    setTimeout(() => {
      // Kontrollera om det nya fokuserade elementet är ett barn till vår container
      const newFocusIsInside = searchContainerRef.current && searchContainerRef.current.contains(document.activeElement);
      
      // Om nytt fokus är utanför vår container, stäng dropdown
      if (!newFocusIsInside) {
        setShowResults(false);
      }
    }, 150);
  };

  // Kompakt version för navbar
  if (isCompact) {
    return (
      <Box className="navbar-search" ref={searchContainerRef}>
        <Formik
          initialValues={{ searchTerm: '' }}
          validationSchema={SearchSchema}
          onSubmit={handleSearch}
        >
          {({ errors, touched, isSubmitting, values }) => (
            <Form 
              style={{ position: 'relative', width: '100%' }} 
              onKeyDown={handleKeyDown}
              role="search" 
              aria-label="Sök i examensarbetet"
            >
              <div className="sr-only" aria-live="polite" id="search-status">
                {statusMessage}
              </div>
              
              <Field name="searchTerm">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    inputRef={searchInputRef}
                    size="small"
                    variant="outlined"
                    placeholder="Sök i examensarbetet..."
                    label="Sök"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    aria-describedby="search-status"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      endAdornment: (
                        <Button 
                          type="submit" 
                          variant="contained" 
                          color="primary"
                          size="small"
                          disabled={isSubmitting}
                          sx={{ ml: 1, minWidth: '60px' }}
                          aria-label="Utför sökning"
                        >
                          {isSearching ? 'Söker...' : 'Sök'}
                        </Button>
                      )
                    }}
                    className="navbar-search-field"
                  />
                )}
              </Field>
              
              {searchResults && showResults && (
                <Box 
                  className="search-results-dropdown" 
                  tabIndex={-1}
                  aria-label="Sökresultat"
                  role="region"
                >
                  <Typography variant="subtitle2" sx={{ p: 1, borderBottom: '1px solid #eee' }}>
                    {searchResults.count === 0 
                      ? `Inga resultat för "${searchResults.term}"` 
                      : `${searchResults.count} resultat för "${searchResults.term}"`}
                  </Typography>
                  
                  {searchResults.count > 0 && (
                    <List dense sx={{ pt: 0 }} role="listbox" aria-label="Lista med sökresultat">
                      {searchResults.items.map((result, index) => (
                        <ListItem 
                          button 
                          key={`${result.id}-${index}`}
                          ref={el => { resultRefs.current[index] = el; }}
                          onClick={() => navigateToSection(result.section, searchResults.term)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          selected={selectedIndex === index}
                          role="option"
                          aria-selected={selectedIndex === index}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              navigateToSection(result.section, searchResults.term);
                            }
                          }}
                          sx={{ 
                            '&:hover': { 
                              backgroundColor: 'rgba(0, 0, 0, 0.04)' 
                            },
                            '&:focus-visible': {
                              outline: '2px solid #4a90e2',
                              outlineOffset: '-2px'
                            },
                            borderBottom: '1px solid #f5f5f5',
                            backgroundColor: selectedIndex === index ? 'rgba(0, 0, 0, 0.08)' : 'transparent',
                          }}
                        >
                          <ListItemText 
                            primary={result.title}
                            secondary={result.sectionTitle}
                            sx={{ 
                              '.MuiListItemText-primary': { 
                                fontWeight: selectedIndex === index ? 700 : 500, 
                                fontSize: '0.9rem' 
                              } 
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                  
                  {searchResults.count === 0 && (
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Inga matchande resultat. Försök med andra söktermer.
                      </Typography>
                    </Box>
                  )}
                </Box>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    );
  }

  // Full version för hero-section
  return (
    <Box className="search-component" ref={searchContainerRef}>
      <Formik
        initialValues={{ searchTerm: '' }}
        validationSchema={SearchSchema}
        onSubmit={handleSearch}
      >
        {({ errors, touched, isSubmitting, values }) => (
          <Form 
            style={{ width: '100%' }} 
            onKeyDown={handleKeyDown}
            role="search"
            aria-label="Sök i examensarbetet"
          >
            <div className="sr-only" aria-live="polite" id="main-search-status">
              {statusMessage}
            </div>
            
            <Box sx={{ display: 'flex', position: 'relative' }}>
              <Field name="searchTerm">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    inputRef={searchInputRef}
                    variant="outlined"
                    placeholder="Sök i examensarbetet..."
                    label="Sök"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    fullWidth
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    aria-describedby="main-search-status"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }
                    }}
                  />
                )}
              </Field>
              
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                disabled={isSubmitting}
                aria-label="Utför sökning"
                sx={{
                  minWidth: '120px',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                {isSearching ? 'Söker...' : 'Sök'}
              </Button>
            </Box>
            
            {errors.searchTerm && touched.searchTerm && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {errors.searchTerm}
              </Alert>
            )}
            
            {searchResults && showResults && (
              <Box 
                className="search-results-box" 
                sx={{ 
                  mt: 2, 
                  p: 2, 
                  border: '1px solid #e0e0e0', 
                  borderRadius: 1,
                  backgroundColor: 'white',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
                role="region"
                aria-label="Sökresultat"
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {searchResults.count === 0 
                    ? `Inga resultat för "${searchResults.term}"` 
                    : `${searchResults.count} resultat för "${searchResults.term}"`}
                </Typography>
                
                {searchResults.count > 0 && (
                  <List sx={{ p: 0 }} role="listbox" aria-label="Lista med sökresultat">
                    {searchResults.items.map((result, index) => (
                      <ListItem 
                        button 
                        key={`${result.id}-${index}`}
                        ref={el => { resultRefs.current[index] = el; }}
                        onClick={() => navigateToSection(result.section, searchResults.term)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        selected={selectedIndex === index}
                        role="option"
                        aria-selected={selectedIndex === index}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            navigateToSection(result.section, searchResults.term);
                          }
                        }}
                        sx={{ 
                          borderBottom: '1px solid #eee',
                          '&:last-child': { borderBottom: 'none' },
                          '&:hover': { 
                            backgroundColor: 'rgba(0, 0, 0, 0.04)' 
                          },
                          '&:focus-visible': {
                            outline: '2px solid #4a90e2',
                            outlineOffset: '-2px'
                          },
                          backgroundColor: selectedIndex === index ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                        }}
                      >
                        <ListItemText 
                          primary={result.title}
                          secondary={`I sektionen: ${result.sectionTitle}`}
                          primaryTypographyProps={{ 
                            fontWeight: selectedIndex === index ? 700 : 500,
                            variant: 'body1'
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
                
                {searchResults.count === 0 && (
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Inga matchande resultat. Försök med andra söktermer eller kontrollera stavningen.
                    </Typography>
                  </Box>
                )}
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SearchComponent; 