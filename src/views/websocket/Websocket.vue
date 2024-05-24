<template>
    <div>
    <h1>WebSocket Client</h1>

    <div class="flex flex-row">
        
        <button 
            @click="connect" 
            class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Connect
        </button>

        <button 
            @click="disconnect" 
            class="ml-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Disconnect
        </button>
    </div>
    
    <div class="flex flex-row mt-5">

        <input 
            v-model="messageInput" 
            placeholder="Escribe un mensaje" 
            class="rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        />

        <button 
            @click="sendMessage"
            class="ml-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Send Message
        </button>
        
    </div>
    
    


    <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const messageInput = ref('');
const messages = ref([]);
let socket;


// Tu token JWT
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNzE2NDEzMDM1LCJleHAiOjE3MTY0OTk0MzV9.iSTiF6Y0fiAYcYIG0XiZ_WFWIgNYSL4WjnbjcEfoaK0';


const connect = () => {
    
  socket = new WebSocket('ws://websocket.splytin.com:5000?token=' + token)
  //socket = new WebSocket('ws://localhost:5000?token=' + token);

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