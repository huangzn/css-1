import React from 'react'
import clsx from 'clsx'
import {ListItemTemplate} from './ActionListItem.stories'

export default {
  title: 'Components/ActionList',
  excludeStories: ['ListTemplate'],
  argTypes: {
    showDividers: {
      control: {type: 'boolean'},
      description: 'Show dividers between items',
      table: {
        category: 'CSS'
      }
    },
    role: {
      options: [0, 1, 2, 3, 4, 5, 6], // iterator
      mapping: ['menu', 'group', 'listbox', 'menubar', 'none', 'radiogroup', 'list'], // values
      control: {
        type: 'select',
        labels: ['menu', 'group', 'listbox', 'menubar', 'none', 'radiogroup', 'list']
      },
      description: 'Semantic list role',
      table: {
        category: 'HTML'
      }
    },
    ariaLabel: {
      name: 'ariaLabel',
      type: 'string',
      description: 'Descriptive label for menu contents',
      table: {
        category: 'HTML'
      }
    },
    ariaLabelledBy: {
      name: 'ariaLabelledBy',
      type: 'string',
      description: 'Reference ID of section divider',
      table: {
        category: 'HTML'
      }
    },
    groupId: {
      name: 'groupId',
      type: 'string',
      description: 'Menu group id',
      table: {
        category: 'HTML'
      }
    },
    children: {
      table: {
        category: 'HTML'
      }
    },
    subGroup: {
      control: {type: 'boolean'},
      description: 'If ActionList is nested within an ActionList',
      table: {
        category: 'CSS'
      }
    },
    listboxMultiSelect: {
      name: 'listboxMultiSelect',
      type: 'string',
      description: 'If ActionList has listbox role + multiselect children',
      table: {
        category: 'HTML'
      }
    }
  }
}

export const ListTemplate = ({
  showDividers,
  children,
  role,
  ariaLabel,
  ariaLabelledBy,
  subGroup,
  listboxMultiSelect
}) => (
  <ul
    className={clsx('ActionList', showDividers && 'ActionList--divided', subGroup && 'ActionList--subGroup')}
    role={role}
    aria-label={ariaLabel && ariaLabel}
    aria-labelledby={ariaLabelledBy && ariaLabelledBy}
    aria-multiselectable={listboxMultiSelect ? 'true' : undefined}
  >
    <>{children}</>
  </ul>
)

export const Playground = ListTemplate.bind({})
Playground.args = {
  role: 'menu',
  ariaLabel: 'Menu description',
  subGroup: false,
  showDividers: false,
  children: (
    <>
      <ListItemTemplate text="Action list item" />
      <ListItemTemplate text="Action list item" />
    </>
  )
}
