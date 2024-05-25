<template>
  <div>
    <h1 class="text-3xl">Chat Room</h1>

    <div class="grid grid-cols-12 mt-4 mb-4 gap-2">

      <div class="col-span-3">

        <select 
          v-model="room" 
          class="w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        >
          <option value="" selected>Seleccione...</option>
          <option value="General">General</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
        </select>

        
      </div>

      <div class="col-span-3">
        <input 
          v-model="username" 
          placeholder="Enter your username"
          class="w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
        >
      </div>
      
      <div class="col-span-6">
        <input 
          v-model="token" 
          placeholder="Enter your token"
          class="w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
        >
      </div>

    </div>

    <div class="">

      <button 
        @click="connectToWebSocket()" 
        class="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Connect
      </button>


      <button 
        @click="disconnect()" 
        class="ml-5 rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Disconnect
      </button>


      <button 
        @click="createRoom()" 
        class="ml-5 rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Create Room
      </button>

    </div>
    

   
    <div id="chat" class="mt-5">
      <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
    </div>
    
    <div class="grid grid-cols-12 gap-2">


      <div class="col-span-6">
        <input 
          v-model="newMessage" 
          placeholder="Enter message"
          class="w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
        >
      </div>



      <div class="col-span-4">
        <button 
          @click="sendMessage()"
          class="ml-5 rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Send
        </button>
      </div>
      

    </div>
   

  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';

const room = ref('');
const username = ref('');
const token = ref('');
const newMessage = ref('');
const messages = ref([]);
let ws;

const connectToWebSocket = () => {
  if (!room.value || !username.value || !token.value) {
    alert('Please enter room name, username and token.');
    return;
  }

  //console.log(room.value);

  //ws = new WebSocket(`ws://localhost:4000/?token=${token.value}&room=${room.value}`);
  ws = new WebSocket(`ws://websocket.splytin.com:4000/?token=${token.value}&room=${room.value}`);

  ws.onopen = () => {
    console.log('Connected to WebSocket');
  };

  ws.onmessage = (event) => {
    //messages.value.push(event.data);

    const receivedMessage = event.data;
    console.log(`Received message: ${receivedMessage}`);
    messages.value.push(receivedMessage);

  };

  ws.onclose = () => {
    console.log('Disconnected from WebSocket');
  };

  ws.onerror = (error) => {
    console.error(`WebSocket error: ${error}`);
  };
};

const sendMessage = () => {

  console.log(ws);

  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(newMessage.value);
    messages.value.push(`Tú: ${newMessage.value}`);
    newMessage.value = ''; // Clear the input field
  } else {
    alert('WebSocket is not connected.');
  }
};

const createRoom = async () => {
  if (!room.value || !token.value) {
    alert('Please enter room name and token.');
    return;
  }

  try {
    const response = await fetch('/rooms/create-room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      },
      body: JSON.stringify({ roomName: room.value })
    });

    if (response.ok) {
      alert('Room created successfully.');
    } else {
      const errorData = await response.json();
      alert(`Error creating room: ${errorData.message}`);
    }
  } catch (error) {
    alert(`Error creating room: ${error.message}`);
  }
};

onUnmounted(() => {
  if (ws) {
    ws.close();
  }
});



const disconnect = () => {
  if (ws) {
    ws.close();
  }
};

</script>


<style scoped>
/* Agrega tus estilos aquí */
</style>





<!-- <template>
    <div>
    <h1>WebSocket Client</h1>

    <div class="flex flex-row">

    
        <div>
          <input v-model="token" placeholder="Enter your token">
        </div>
        
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
const token = ref('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNzE2NTgwMTUzLCJleHAiOjE3MTY2NjY1NTN9.GUGIiDBSgNyeFGlq_L3xycLo959o1v3cw8i8rRTlYjg');



const connect = () => {
    
  //socket = new WebSocket('ws://websocket.splytin.com:4000?token=' + token)
  socket = new WebSocket('ws://localhost:4000?token=${token}&room=${room}');

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

</style> -->