import { describe, it, expect, beforeEach, vi } from 'vitest';
  import { mount } from '@vue/test-utils';
  import { createPinia, setActivePinia } from 'pinia';
  import Board from '@/features/kanban/components/Board.vue';
  import Column from '@/features/kanban/components/Column.vue';
  import { useKanbanStore } from '@/stores/kanbanStore';
  import type { BoardData } from '@/features/kanban/types';

  describe('Board.vue', () => {
    beforeEach(() => {
      setActivePinia(createPinia());
    });

    // fake data
    const mockBoard: BoardData = {
      id: '1',
      title: 'Test Kanban',
      columns: [
        {
          id: 'col-1',
          title: 'To-do',
          cards: []
        },
        {
          id: 'col-2',
          title: 'In Progress',
          cards: []
        }
      ]
    };

    it('Display board', () => {
      const wrapper = mount(Board, {
        props: { board: mockBoard },
        global: {
          components: { Column }  // emulate the component
        }
      });

      expect(wrapper.find('h1').text()).toBe('Test Kanban');
    });

    it('Display columns', () => {
      const wrapper = mount(Board, {
        props: { board: mockBoard },
        global: {
          components: { Column }
        }
      });

      const columns = wrapper.findAllComponents(Column);
      expect(columns).toHaveLength(2);
    });

    it('Display input form', () => {
      const wrapper = mount(Board, {
        props: { board: mockBoard },
        global: {
          components: { Column }
        }
      });

      expect(wrapper.find('input[placeholder="New Task..."]').exists()).toBe(true);
      expect(wrapper.find('select').exists()).toBe(true);
      expect(wrapper.find('button').text()).toBe('Add task');
    });

    it('Call addCard', async () => {
      const wrapper = mount(Board, {
        props: { board: mockBoard },
        global: {
          components: { Column }
        }
      });

      const store = useKanbanStore();
      const addCardSpy = vi.spyOn(store, 'addCard');

      // fill in the input
      const input = wrapper.find('input');
      await input.setValue('New task');

      // Clic button
      const button = wrapper.find('button');
      await button.trigger('click');

      // check the store has been called
      expect(addCardSpy).toHaveBeenCalledWith('col-1', 'New task', 'medium');
    });
  });