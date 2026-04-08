import { describe, it, expect } from 'vitest';
  import { mount } from '@vue/test-utils';
  import Card from '@/features/kanban/components/Card.vue';

  describe('Card.vue', () => {
    it('Display a card', () => {
      const wrapper = mount(Card, {
        props: {
          card: {
            id: '1',
            title: 'Test card',
            priority: 'high'
          },
          columnId: 'col-1'
        }
      });

      expect(wrapper.text()).toContain('Test card');
      expect(wrapper.find('.priority.high').exists()).toBe(true);
    });

   
  });