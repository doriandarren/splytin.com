<template>
    <div>

        <div>Cards</div>



        <div>Card with image</div>
        <div class="max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img class="object-cover w-full h-48"
                src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Flower and sky" />
        </div>

        <pre>
            {{ Card_with_image }}
        </pre>


        <div>Card with text</div>
        <div class="max-w-xs overflow-hidden rounded-lg shadow-lg">
            <div class="px-6 py-4">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
                    tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
        </div>
        <pre>
            {{ Card_with_text }}
        </pre>


        <div>Card with image and text</div>
        <div class="max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img class="object-cover w-full h-48"
                src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Flower and sky" />
            <div class="px-6 py-4">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
                    tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
        </div>
        <pre>
            {{ Card_with_image_and_text }}
        </pre>


        <div>Card horizontal</div>
        <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
            <div class="w-full sm:w-1/3">
                <img class="object-cover w-full h-48"
                    src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Flower and sky" />
            </div>
            <div class="flex-1 px-6 py-4">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
                    tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
        </div>
        <pre>
            {{ Card_horizontal }}
        </pre>

        <div>Card image with text over</div>
        <div class="relative max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img class="object-cover w-full h-48"
                src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Flower and sky" />
            <div class="absolute top-0 left-0 px-6 py-4">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
                <p class="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
                    tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
        </div>

        <pre>
            {{ Card_image_with_text_over }}
        </pre>


        

    </div>
</template>

<script setup>

let Card_with_image = `<div class="max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img class="object-cover w-full h-48"
                src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Flower and sky" />
        </div>`;
let Card_with_image_and_text = `<div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
            <div class="w-full sm:w-1/3">
                <img class="object-cover w-full h-48"
                    src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Flower and sky" />
            </div>
            <div class="flex-1 px-6 py-4">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
                    tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
        </div>`;

let Card_with_text = `<div class="max-w-xs overflow-hidden rounded-lg shadow-lg">
            <div class="px-6 py-4">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
                    tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
        </div>`;

let Card_horizontal = `<div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
            <div class="w-full sm:w-1/3">
                <img class="object-cover w-full h-48"
                    src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Flower and sky" />
            </div>
            <div class="flex-1 px-6 py-4">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
                    tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
        </div>`;       


let Card_image_with_text_over = `<div class="relative max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img class="object-cover w-full h-48"
                src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Flower and sky" />
            <div class="absolute top-0 left-0 px-6 py-4">
                <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
                <p class="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
                    tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
        </div>`;



</script>

<style scoped></style>