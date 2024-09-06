import React from 'react'

const ChatPage = () => {
  return (
    <div class="bg-gray-200  h-screen flex items-center justify-center  p-4">
    <div class="bg-white p-6 h-screen shadow-lg rounded-xl w-3/4 my-4  ">
      <form>
        <div class="w-full max-w-full bg-gray-100  rounded-2xl neo-shadow p-6 ">
          <div class="flex items-center w-full bg-white rounded-xl shadow-sm">
            <div class="w-12 h-12 rounded-full neo-shadow flex items-center justify-center">
                <span class="text-xl font-semibold text-gray-700"></span>
            </div>
            <h1 class="text-2xl font-bold text-gray-800 ml-4">Document AI Assistant</h1>
          </div>

          <div class="h-96 overflow-y-auto neo-inset p-4 rounded-xl space-y-4">

              <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 rounded-full neo-shadow flex-shrink-0 flex items-center justify-center">
                      <span class="text-sm font-medium bg-white border border-gray-300 p-3 px-4 mx-1 shadow-md rounded-full text-gray-700 ">JD</span>
                  </div>
                  <div class="bg-white p-3 rounded-lg neo-shadow max-w-xl">
                      <p class="text-sm text-gray-700 ">
                        Hey there! How's it dsfsadf sadfsdafsadfsadfsadfsad fsadfsa dfsadf sdafsd afs dafs daf s dafs daf sdaf sdfs ad f sa dfsadfs dafsag o ing?
                        </p>
                  </div>
              </div>

              <div class="flex items-start justify-end space-x-2">
                  <div class="bg-blue-500 p-3 rounded-lg neo-shadow max-w-xs">
                      <p class="text-sm text-white">Hi John! I'm doing well, thanks for asking. How about you?</p>
                  </div>
              </div>
          </div>


          <div class="flex items-center space-x-4">
              <div class="flex-grow bg-white rounded-lg">
                  <input type="text" placeholder="Type your message..."
                        class="w-full p-4 rounded-xl neo-inset bg-transparent text-gray-700  placeholder-gray-500  focus:outline-none" />
              </div>
              <button class="p-4 rounded-xl border border-gray-300 bg-white shadow-md neo-shadow neo-button focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
              </button>
          </div>
        </div>


          <div class="flex  p-6 justify-between items-center rounded-lg mt-2 border border-gray-200 shadow-md">
            <input type="file" id="fileInput" class="w-9/12 border border-gray-300 rounded-md p-2 text-gray-700" />
            <button class="bg-blue-500 w-2/12 text-white px-4 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Upload File
            </button>
          </div>

      </form>
    </div>
  </div>
  )
}

export default ChatPage