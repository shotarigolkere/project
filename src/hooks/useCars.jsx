import { useState, useEffect, useCallback, useMemo } from "react";
import {
  fetchCars as apiFetchCars,
  fetchCarById as apiFetchCarById,
} from "../api/carsData";

const STORAGE_KEY = "cars";

export default function useCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      try {
        const cached = localStorage.getItem(STORAGE_KEY);

        if (cached) {
          const parsed = JSON.parse(cached);
          setCars(parsed);
          setLoading(false);
        } else {
          const data = await apiFetchCars();
          setCars(data);
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          } catch (e) {}
          setLoading(false);
        }
      } catch (err) {
        setError("მონაცემების ჩატვირთვა ვერ მოხერხდა.");
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  const getCarById = useCallback(async (id) => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        const found = parsed.find((c) => c.id.toString() === id.toString());
        console.log(" found from cache:", found);
        if (found) return found;
      }
    } catch (e) {
      
    } 

    const car = await apiFetchCarById(id.toString());

    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      const arr = cached ? JSON.parse(cached) : [];
      const idx = arr.findIndex((c) => c.id === car.id);
      if (idx === -1) arr.push(car);
      else arr[idx] = car;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      setCars(arr);
    } catch (e) {
      
    }

    return car;
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetchCars();
      setCars(data);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {}
    } catch (err) {
      setError("მონაცემების ჩატვირთვა ვერ მოხერხდა.");
    } finally {
      setLoading(false);
    }
  }, []);

  const addCar = useCallback(async (newCar) => {
    let current = [];
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      current = cached ? JSON.parse(cached) : (cars || []);
    } catch (e) {
      current = cars || [];
    }

    const nextId = newCar && newCar.id
      ? newCar.id
      : (current.length ? Math.max(...current.map(c => Number(c.id) || 0)) + 1 : 1);

    const carToAdd = { ...newCar, id: nextId };

    const updated = [...current, carToAdd];

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {}

    setCars((prev) => {
      if (prev && prev.find(p => String(p.id) === String(carToAdd.id))) return prev;
      return prev ? [...prev, carToAdd] : [carToAdd];
    });

    return carToAdd;
  }, [cars]);

  const memoizedCars = useMemo(() => cars, [cars]);

  return {
    cars: memoizedCars,
    loading,
    error,
    getCarById,
    refresh,
    addCar,
  };
}
