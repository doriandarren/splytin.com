<template>
    <div>

        <div>Buttons</div>


        <div>Button sizes</div>
        <button
            class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Large</button>
        <button
            class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Regular</button>
        <button
            class="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Small</button>
        <a class="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            href="#">Link</a>
        <input
            class="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800"
            type="submit" value="Input" />
        <pre>
            {{ Button_sizes }}
        </pre>

        <div>Block button</div>
        <button
            class="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Large
            block button</button>

        <div>Button colors</div>
        <button
            class="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Danger</button>
        <button
            class="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">Success</button>
        <button
            class="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">Info</button>
        <button
            class="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Secondary</button>
        <button
            class="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-600 rounded-lg focus:shadow-outline hover:bg-pink-700">Pink</button>
        <button
            class="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700">Purple</button>
        <button
            class="h-10 px-5 text-gray-800 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-200">White</button>

        <pre>
            {{ Button_sizes }}
        </pre>


        <div>Outline button</div>
        <button
            class="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Outline</button>
        <pre>
            {{ Outline_button }}
        </pre>


        <div>Button with icon right</div>
        <button
            class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <span>With icon</span>
            <svg class="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
                <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        </button>

        <pre>
            {{ Button_with_icon_right }}
        </pre>


        <div>Button with icon left</div>
        <button
            class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 mr-3 fill-current" viewBox="0 0 20 20">
                <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
            <span>With icon</span>
        </button>
        <pre>
            {{ Button_with_icon_left }}
        </pre>

        <div>Button group</div>
        <div class="inline-flex" role="group" aria-label="Button group">
            <button
                class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">Left</button>
            <button
                class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">Middle</button>
            <button
                class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800">Right</button>
        </div>

        <pre>
            {{ Button_group }}
        </pre>


        <div>Pill button</div>
        <button
            class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">Pill
            button</button>

        <div>Icon button</div>
        <button
            class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        </button>
        <button
            class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        </button>
        <button
            class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                </path>
            </svg>
        </button>

        <pre>
            {{ Pill_button }}
        </pre>


        <div>Dropdown</div>
        <div class="relative mb-32">
            <button
                class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                <span>Dropdown</span>
                <svg class="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
                    <path
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </button>
            <div class="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg">
                <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">One item</a>
                <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">Another longer
                    item</a>
                <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">A medium item</a>
            </div>
        </div>

        <pre>
            {{ Dropdown }}
        </pre>

    </div>
</template>

<script setup>

let Button_sizes = `<button
            class="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Danger</button>
        <button
            class="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">Success</button>
        <button
            class="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">Info</button>
        <button
            class="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Secondary</button>
        <button
            class="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-600 rounded-lg focus:shadow-outline hover:bg-pink-700">Pink</button>
        <button
            class="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700">Purple</button>
        <button
            class="h-10 px-5 text-gray-800 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-200">White</button>`;

let Outline_button = `<button
            class="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Outline</button>`;


let Button_with_icon_right = `<button
            class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 mr-3 fill-current" viewBox="0 0 20 20">
                <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
            <span>With icon</span>
        </button>`;
let Button_with_icon_left = `<button
            class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 mr-3 fill-current" viewBox="0 0 20 20">
                <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
            <span>With icon</span>
        </button>`;

let Button_group = `<div class="inline-flex" role="group" aria-label="Button group">
            <button
                class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">Left</button>
            <button
                class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">Middle</button>
            <button
                class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800">Right</button>`;

let Pill_button = `<button
            class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        </button>
        <button
            class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        </button>
        <button
            class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                </path>
            </svg>
        </button>`;

    let Dropdown = `<div class="relative mb-32">
            <button
                class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                <span>Dropdown</span>
                <svg class="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
                    <path
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </button>
            <div class="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg">
                <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">One item</a>
                <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">Another longer
                    item</a>
                <a class="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">A medium item</a>
            </div>
        </div>`

</script>

<style scoped></style>