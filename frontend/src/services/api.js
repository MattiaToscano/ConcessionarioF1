const API_URL = 'http://localhost:8000/api/v1';

export const carService = {
  // Ottieni tutte le auto
  async getAllCars() {
    try {
      const response = await fetch(`${API_URL}/cars`);
      if (!response.ok) throw new Error('Errore nel caricamento delle auto');
      return await response.json();
    } catch (error) {
      console.error('Errore API:', error);
      throw error;
    }
  },

  // Ottieni una singola auto per ID
  async getCarById(id) {
    try {
      const response = await fetch(`${API_URL}/cars/${id}`);
      if (!response.ok) throw new Error('Auto non trovata');
      return await response.json();
    } catch (error) {
      console.error('Errore API:', error);
      throw error;
    }
  },

  // Ottieni info API
  async getApiInfo() {
    try {
      const response = await fetch(`${API_URL}/info`);
      if (!response.ok) throw new Error('Errore nel caricamento info API');
      return await response.json();
    } catch (error) {
      console.error('Errore API:', error);
      throw error;
    }
  }
};
