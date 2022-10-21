import React, {useEffect, useState } from "react";
// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName,initialValue) { //React Hook
    // Creamos el estado inicial para nuestros errores y carga
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    //Podemos utilizar otros hooks
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      //Simulamos un segundo de delay de carga
      setTimeout(() => {
        try {
          // Guardamos nuestro item en una constante
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));//JSON.stringify toma un objeto JavaScript 
                                                                //y lo transforma en una cadena JSON
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem); //Analiza una cadena de texto como JSON, 
                                                        //transformando opcionalmente el valor producido por el análisis
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error){
          setError(error);
        }
    }, 1000);
    });
  
    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage }