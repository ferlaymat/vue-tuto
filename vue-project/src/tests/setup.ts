 import { beforeAll } from 'vitest';
  import { createPinia, setActivePinia } from 'pinia';
//activate pinia in test to use store
  beforeAll(() => {
    setActivePinia(createPinia());
  });