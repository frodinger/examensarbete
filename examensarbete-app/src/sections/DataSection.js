import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

// Exempeldata - ersätt med din egen forskningsdata
const monthlyData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 59 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 81 },
  { name: 'Maj', value: 56 },
  { name: 'Jun', value: 55 },
  { name: 'Jul', value: 40 },
  { name: 'Aug', value: 70 },
  { name: 'Sep', value: 90 },
  { name: 'Okt', value: 75 },
  { name: 'Nov', value: 60 },
  { name: 'Dec', value: 85 },
];

const categoryData = [
  { name: 'Kategori A', value: 400 },
  { name: 'Kategori B', value: 300 },
  { name: 'Kategori C', value: 200 },
  { name: 'Kategori D', value: 100 },
  { name: 'Kategori E', value: 150 },
];

const pieData = [
  { name: 'Grupp 1', value: 400 },
  { name: 'Grupp 2', value: 300 },
  { name: 'Grupp 3', value: 300 },
  { name: 'Grupp 4', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const DataSection = () => {
  const [activeChart, setActiveChart] = useState('line');
  
  return (
    <section id="data" className="data-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Datavisualisering</h2>
          <div className="underline"></div>
          <p className="section-description">
            Utforska våra forskningsresultat genom interaktiva visualiseringar
          </p>
        </motion.div>
        
        <div className="chart-controls">
          <button 
            className={`chart-button ${activeChart === 'line' ? 'active' : ''}`} 
            onClick={() => setActiveChart('line')}
            aria-label="Visa linjediagram"
          >
            Tidsserie
          </button>
          <button 
            className={`chart-button ${activeChart === 'bar' ? 'active' : ''}`} 
            onClick={() => setActiveChart('bar')}
            aria-label="Visa stapeldiagram"
          >
            Kategorier
          </button>
          <button 
            className={`chart-button ${activeChart === 'pie' ? 'active' : ''}`} 
            onClick={() => setActiveChart('pie')}
            aria-label="Visa cirkeldiagram"
          >
            Fördelning
          </button>
        </div>
        
        <motion.div 
          className="chart-container"
          key={activeChart}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {activeChart === 'line' && (
            <div className="chart-wrapper">
              <h3>Tidsserie - Månatliga värden</h3>
              <p className="chart-description">
                Denna visualisering visar förändringar i [variabel] över tid.
              </p>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="Värde" 
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
          
          {activeChart === 'bar' && (
            <div className="chart-wrapper">
              <h3>Kategorisk data</h3>
              <p className="chart-description">
                Jämförelse av olika [kategorier] baserat på [variabel].
              </p>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={categoryData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Värde" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          
          {activeChart === 'pie' && (
            <div className="chart-wrapper">
              <h3>Procentuell fördelning</h3>
              <p className="chart-description">
                Visar den relativa fördelningen mellan olika [grupper].
              </p>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>
        
        <div className="data-insights">
          <motion.div 
            className="insight-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4>Nyckelinsikt 1</h4>
            <p>
              Vi har observerat en [X]% ökning i [variabel] under [tidsperiod], 
              vilket indikerar [slutsats].
            </p>
          </motion.div>
          
          <motion.div 
            className="insight-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>Nyckelinsikt 2</h4>
            <p>
              [Kategori A] visar konsekvent högre värden jämfört med andra kategorier, 
              vilket tyder på [slutsats].
            </p>
          </motion.div>
          
          <motion.div 
            className="insight-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4>Nyckelinsikt 3</h4>
            <p>
              Den procentuella fördelningen visar att [Grupp 1] står för nästan 
              hälften av alla observationer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataSection; 