import { useState, useEffect } from 'react';
import { 
  defaultIcebreaker, 
  defaultPrinciples, 
  validateIcebreakerData, 
  validatePrinciplesData 
} from '../data/dataStructure.js';

/**
 * Custom hook for importing external data files
 * Handles loading, validation, and fallback for icebreaker and principles data
 */
export const useDataImport = () => {
  const [icebreakerData, setIcebreakerData] = useState(defaultIcebreaker);
  const [principlesData, setPrinciplesData] = useState(defaultPrinciples);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataStatus, setDataStatus] = useState({
    icebreaker: 'default',
    principles: 'default'
  });

  // Function to load icebreaker data
  const loadIcebreakerData = async () => {
    try {
      // Try to import from public folder or external URL
      const response = await fetch('/data_icebreaker.json');
      if (response.ok) {
        const data = await response.json();
        if (validateIcebreakerData(data)) {
          setIcebreakerData(data);
          setDataStatus(prev => ({ ...prev, icebreaker: 'loaded' }));
          return true;
        } else {
          console.warn('Invalid icebreaker data structure');
        }
      }
    } catch (err) {
      console.log('Icebreaker data not found, using default');
    }
    return false;
  };

  // Function to load principles data
  const loadPrinciplesData = async () => {
    try {
      // Try to import from public folder or external URL
      const response = await fetch('/data_principles.json');
      if (response.ok) {
        const data = await response.json();
        if (validatePrinciplesData(data)) {
          setPrinciplesData(data);
          setDataStatus(prev => ({ ...prev, principles: 'loaded' }));
          return true;
        } else {
          console.warn('Invalid principles data structure');
        }
      }
    } catch (err) {
      console.log('Principles data not found, using default');
    }
    return false;
  };

  // Function to manually import data from file input
  const importDataFromFile = async (file, type) => {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      if (type === 'icebreaker') {
        if (validateIcebreakerData(data)) {
          setIcebreakerData(data);
          setDataStatus(prev => ({ ...prev, icebreaker: 'imported' }));
          return { success: true, message: 'Icebreaker data imported successfully' };
        } else {
          return { success: false, message: 'Invalid icebreaker data structure' };
        }
      } else if (type === 'principles') {
        if (validatePrinciplesData(data)) {
          setPrinciplesData(data);
          setDataStatus(prev => ({ ...prev, principles: 'imported' }));
          return { success: true, message: 'Principles data imported successfully' };
        } else {
          return { success: false, message: 'Invalid principles data structure' };
        }
      }
    } catch (err) {
      return { success: false, message: `Error parsing JSON: ${err.message}` };
    }
  };

  // Function to reset to default data
  const resetToDefault = (type) => {
    if (type === 'icebreaker') {
      setIcebreakerData(defaultIcebreaker);
      setDataStatus(prev => ({ ...prev, icebreaker: 'default' }));
    } else if (type === 'principles') {
      setPrinciplesData(defaultPrinciples);
      setDataStatus(prev => ({ ...prev, principles: 'default' }));
    }
  };

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        await Promise.all([
          loadIcebreakerData(),
          loadPrinciplesData()
        ]);
      } catch (err) {
        setError('Error loading data files');
        console.error('Data loading error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    icebreakerData,
    principlesData,
    loading,
    error,
    dataStatus,
    importDataFromFile,
    resetToDefault,
    reloadData: () => {
      loadIcebreakerData();
      loadPrinciplesData();
    }
  };
};
