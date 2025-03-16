import { useState } from "react";

export function useObject<T>(initialObject: T) {
  const [object, setObject] = useState<T>(initialObject);

  const setValue = (key: keyof T, value: T[keyof T]) => {
    setObject((prevObject) => ({
      ...prevObject,
      [key]: value,
    }));
  };

  const setValues = (newValues: Partial<T>) => {
    setObject((prevObject) => ({
      ...prevObject,
      ...newValues,
    }));
  };

  return { object, setValue, setValues };
}
