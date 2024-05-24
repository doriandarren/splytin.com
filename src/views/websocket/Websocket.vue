<template>
    <div>
    <h1>WebSocket Client</h1>

    <div class="flex flex-row">
        
        <button 
            @click="connect" 
            class="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            Connect
        </button>

        <button 
            @click="disconnect" 
            class="ml-5 rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
            Disconnect
        </button>
    </div>
    
    <div class="grid grid-cols-12 mt-5">

      <div class="col-span-4">
        <input 
            v-model="messageInput" 
            placeholder="Escribe un mensaje" 
            class="w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
        />
      </div>

      <div class="col-span-8">
        <button 
            @click="sendMessage"
            class="ml-5 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            Send Message
        </button>
      </div>

    </div>

    <div class="mt-5" v-for="(message, index) in messages" :key="index">
      <div class="text-red-300">
        {{ message }}
      </div>
    </div>

  </div>
</template>

<script setup>

import { ref } from 'vue';

const messageInput = ref('');
const messages = ref([]);
let socket;


// Tu token JWT
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNzE2NTgwMTUzLCJleHAiOjE3MTY2NjY1NTN9.GUGIiDBSgNyeFGlq_L3xycLo959o1v3cw8i8rRTlYjg';


const connect = () => {
    
  //socket = new WebSocket('ws://websocket.splytin.com:4000?token=' + token)
  socket = new WebSocket('ws://localhost:4000?token=' + token);

  socket.onopen = () => {
    console.log('Connected to the server');
  };

  socket.onmessage = (event) => {
    messages.value.push(`Server: ${event.data}`);
  };

  socket.onclose = () => {
    console.log('Disconnected from the server');
  };
};

const disconnect = () => {
  if (socket) {
    socket.close();
  }
};

const sendMessage = () => {
  if (socket && messageInput.value) {
    socket.send(messageInput.value);
    messages.value.push(`Yo: ${messageInput.value}`);
    messageInput.value = '';
  }
};

</script>

<style lang="scss" scoped>

</style>