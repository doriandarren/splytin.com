<template>
    
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronRightIcon } from '@heroicons/vue/20/solid'
  import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
  } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    {
      name: 'Teams',
      icon: UsersIcon,
      current: false,
      children: [
        { name: 'Engineering', href: '#' },
        { name: 'Human Resources', href: '#' },
        { name: 'Customer Success', href: '#' },
      ],
    },
    {
      name: 'Projects',
      icon: FolderIcon,
      current: false,
      children: [
        { name: 'GraphQL API', href: '#' },
        { name: 'iOS App', href: '#' },
        { name: 'Android App', href: '#' },
        { name: 'New Customer Portal', href: '#' },
      ],
    },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  ]
  </script>