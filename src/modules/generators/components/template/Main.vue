<template>
  <div>
    <!-- Mobile Sidebar -->
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-navbar px-6 pb-4 ring-1 ring-white/10">
                <div class="flex h-16 shrink-0 items-center">
                  <Logo />

                  <div class="text-3xl ml-3 text-white">
                    <LogoLetters />
                  </div>

                </div>

                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <router-link v-if="!item.children" :to="{ name: item.href }" @click="closeSidebar"
                            :class="[currentRoute === item.href ? 'bg-primary-dark text-white' : 'text-white hover:text-white hover:bg-gray-300/80', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white']">
                            <component :is="item.icon" class="h-6 w-6 shrink-0 text-white" aria-hidden="true" />
                            {{ item.name }}
                          </router-link>
                          <div v-else>
                            <button
                              :class="[isDropdownOpen(item.name) ? 'bg-primary-dark text-white' : 'text-white hover:text-white hover:bg-gray-300/80', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold']"
                              @click="toggleDropdown(item.name)">
                              <component :is="item.icon" class="h-6 w-6 shrink-0 text-white" aria-hidden="true" />
                              {{ item.name }}
                              <ChevronRightIcon
                                :class="[isDropdownOpen(item.name) ? 'rotate-90 text-white' : 'text-white', 'ml-auto h-5 w-5 shrink-0']"
                                aria-hidden="true" />
                            </button>
                            <transition>
                              <ul v-if="isDropdownOpen(item.name)" class="mt-1 px-2">
                                <li v-for="subItem in item.children" :key="subItem.name">
                                  <router-link :to="{ name: subItem.href }" @click="closeSidebar"
                                    :class="[currentRoute === subItem.href ? 'bg-primary-dark text-white' : 'hover:bg-gray-300/80', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-white']">
                                    {{ subItem.name }}
                                  </router-link>
                                </li>
                              </ul>
                            </transition>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>


              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>



    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-navbar px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <Logo />
          <div class="text-3xl ml-3 text-white">
            <LogoLetters />
          </div>
        </div>

        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <router-link v-if="!item.children" :to="{ name: item.href }" @click="closeSidebar"
                    :class="[currentRoute === item.href ? 'bg-primary-dark text-white' : 'text-white hover:text-white hover:bg-gray-300/80', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white']">
                    <component :is="item.icon" class="h-6 w-6 shrink-0 text-white" aria-hidden="true" />
                    {{ item.name }}
                  </router-link>
                  <div v-else>
                    <button
                      :class="[isDropdownOpen(item.name) ? 'bg-primary-dark text-white' : 'text-white hover:text-white hover:bg-gray-300/80', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold']"
                      @click="toggleDropdown(item.name)">
                      <component :is="item.icon" class="h-6 w-6 shrink-0 text-white" aria-hidden="true" />
                      {{ item.name }}
                      <ChevronRightIcon
                        :class="[isDropdownOpen(item.name) ? 'rotate-90 text-white' : 'text-white', 'ml-auto h-5 w-5 shrink-0']"
                        aria-hidden="true" />
                    </button>
                    <transition>
                      <ul v-if="isDropdownOpen(item.name)" class="mt-1 px-2">
                        <li v-for="subItem in item.children" :key="subItem.name">
                          <router-link :to="{ name: subItem.href }" @click="closeSidebar"
                            :class="[currentRoute === subItem.href ? 'bg-primary-dark text-white' : 'text-white hover:text-white hover:bg-gray-300/80', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-white']">
                            {{ subItem.name }}
                          </router-link>
                        </li>
                      </ul>
                    </transition>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="relative flex flex-1"></div>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>

                <!-- <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> -->

                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">{{ user.name }}</span>
                  <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>

              <transition>
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href"
                    :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                    @click="item.onClick">
                    {{ item.name }}
                  </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-2">
        <div class="px-4 sm:px-6 lg:px-8 mt-5">
          <!-- Your content -->
          <!-- <Breadcrumb /> -->
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  CodeBracketIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  DocumentDuplicateIcon,
  BuildingLibraryIcon,
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
import Logo from '@/components/template/images/Logo.vue';
import LogoLetters from '@/components/template/images/LogoLetters.vue';
import { useAuthenticationStore } from '@/stores/auth/authentication';
import { storeToRefs } from 'pinia';



// Importar traducciones
const { t } = useI18n()
const authStore = useAuthenticationStore();
const { logout, currentUser } = authStore;
const { user, authErrors } = storeToRefs(authStore);




const navigation = [
  { name: t('form'), href: 'generator-form', icon: CodeBracketIcon, current: true },
  { name: t('xml'), href: 'generator-xml', icon: DocumentDuplicateIcon, current: false },

  // {
  //     name: t("setting"), icon: Cog6ToothIcon, current: false,
  //     children: [
  //         { name: t('companies'), href: 'companies', icon: BuildingLibraryIcon, current: false },
  //         { name: t('own_companies'), href: 'own_companies', icon: BuildingOffice2Icon, current: false },
  //         { name: t('providers'), href: 'providers', icon: CurrencyDollarIcon, current: false },
  //         { name: t('services'), href: 'services', icon: ServerIcon, current: false },
  //     ]
  // }

]

const userNavigation = [
  { name: t('modules'), href: '/main-screen' },
  { name: t('logout'), href: '#', onClick: () => sessionLogout() },
]

const sessionLogout = async () => {
  await logout();
}

const sidebarOpen = ref(false)
const openDropdown = ref(null)

const router = useRouter()
const route = useRoute()
const currentRoute = ref(route.name)

watch(
  () => route.name,
  (newRoute) => {
    currentRoute.value = newRoute
    const parentItem = navigation.find((item) => item.children && item.children.some((subItem) => subItem.href === newRoute))
    if (parentItem) {
      openDropdown.value = parentItem.name
    } else {
      openDropdown.value = null
    }
  },
  { immediate: true }
)

const setSelected = (name) => {
  currentRoute.value = name
  router.push({ name })
  const parentItem = navigation.find(item => item.children && item.children.some(subItem => subItem.href === name));
  if (!parentItem) {
    openDropdown.value = null;
  }
}

const toggleDropdown = (name) => {
  if (openDropdown.value === name) {
    openDropdown.value = null
  } else {
    openDropdown.value = name
  }
}

const isDropdownOpen = (name) => {
  return openDropdown.value === name;
}

const closeAllDropdowns = () => {
  openDropdown.value = null;
}

const closeSidebar = () => {
  sidebarOpen.value = false;
  closeAllDropdowns();
}

onMounted(async () => {
    await currentUser();
    //console.log(user.value);
})
</script>

<style scoped>
/* Añade estilos específicos aquí si lo deseas */
</style>