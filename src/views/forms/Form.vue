<template>
    <div>
        <div>Forms</div>


        <div>Simple input</div>
        <input
            class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text" placeholder="Large input" />
        <input
            class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text" placeholder="Regular input" />
        <input class="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text" placeholder="Small input" />

        <div>Simple select</div>
        <div class="relative inline-block w-full text-gray-700">
            <select
                class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                placeholder="Regular input">
                <option>A regular sized select input</option>
                <option>Another option</option>
                <option>And one more</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </div>
        </div>


        <div>Checkbox</div>
        <label class="text-gray-700">
            <input type="checkbox" value="" />
            <span class="ml-1">Lorem ipsum dolor sit</span>
        </label>

        <div>Radio</div>
        <label class="text-gray-700">
            <input type="radio" value="" />
            <span class="ml-1">Lorem ipsum dolor sit</span>
        </label>


        <div>Textarea</div>
        <textarea
            class="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"></textarea>

        <div>Label over</div>
        <div class="text-gray-700">
            <label class="block mb-1" for="forms-labelOverInputCode">Full name</label>
            <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" placeholder="Regular input" id="forms-labelOverInputCode" />
        </div>


        <div>Label left</div>
        <div class="text-gray-700 md:flex md:items-center">
            <div class="mb-1 md:mb-0 md:w-1/3">
                <label for="forms-labelLeftInputCode">Full name</label>
            </div>
            <div class="md:w-2/3 md:flex-grow">
                <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    type="text" placeholder="Regular input" id="forms-labelLeftInputCode" />
            </div>
        </div>


        <div>Form grid</div>
        <form class="space-y-4 text-gray-700">
            <div class="flex flex-wrap">
                <div class="w-full">
                    <label class="block mb-1" for="formGridCode_card">Card number</label>
                    <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text" id="formGridCode_card" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_name">First name</label>
                    <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text" id="formGridCode_name" />
                </div>
                <div class="w-full px-2 md:w-1/2">
                    <label class="block mb-1" for="formGridCode_last">Last name</label>
                    <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text" id="formGridCode_last" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                <div class="w-full px-2 md:w-1/3">
                    <label class="block mb-1" for="formGridCode_month">Month</label>
                    <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text" id="formGridCode_month" />
                </div>
                <div class="w-full px-2 md:w-1/3">
                    <label class="block mb-1" for="formGridCode_year">Year</label>
                    <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text" id="formGridCode_year" />
                </div>
                <div class="w-full px-2 md:w-1/3">
                    <label class="block mb-1" for="formGridCode_cvc">CVC</label>
                    <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text" id="formGridCode_cvc" />
                </div>
            </div>
        </form>


        <div>Input with icon right</div>
        <div class="relative text-gray-700">
            <input class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" placeholder="Regular input" />
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                        clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </div>
        </div>


        <div>Input with icon left</div>
        <div class="relative text-gray-700">
            <input class="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" placeholder="Regular input" />
            <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
            </div>
        </div>


        <div>Input with button right</div>
        <div class="relative text-gray-700">
            <input class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" placeholder="Regular input" />
            <button
                class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">Click</button>
        </div>


        <div>Helper text</div>
        <div class="text-gray-700">
            <label class="block mb-1" for="forms-helpTextCode">Password</label>
            <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="password" id="forms-helpTextCode" aria-describedby="passwordHelp" />
            <span class="text-xs text-gray-600" id="passwordHelp">Your password must be at least 6 characters long.</span>
        </div>

        <div>Input with validation</div>
        <div class="mb-4 text-gray-700">
            <label class="block mb-1" for="forms-validationInputCode_error">Password</label>
            <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border border-red-700 rounded-lg focus:shadow-outline"
                type="password" id="forms-validationInputCode_error" aria-describedby="passwordHelp" />
            <span class="text-xs text-red-700" id="passwordHelp">Your password is too short.</span>
        </div>
        <div class="text-gray-700">
            <label class="block mb-1" for="forms-validationInputCode_success">Password</label>
            <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border border-green-500 rounded-lg focus:shadow-outline"
                type="password" id="forms-validationInputCode_success" aria-describedby="passwordHelp" />
            <span class="text-xs text-green-700" id="passwordHelp">Your password is strong.</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>