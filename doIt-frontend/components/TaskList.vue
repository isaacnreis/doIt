<template>
  <div class="max-w-2xl mx-auto mt-8">
    <div
      v-for="task in tasks"
      :key="task.id"
      class="bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-4"
    >
      <div>
        <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
        <p class="text-gray-600">{{ task.description }}</p>
      </div>
      <div class="flex gap-2">
        <button
          class="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition"
          @click="openEditModal(task)"
        >
          ✏️
        </button>
        <button
          class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          @click="confirmDelete(task.id)"
        >
          🗑️
        </button>
      </div>
    </div>

    <!-- Modal de Edição -->
    <div
      v-if="isEditing"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 class="text-xl font-semibold mb-4">Editar Tarefa</h3>
        <input
          v-model="editedTask.title"
          class="w-full p-2 border rounded-md mb-2"
          placeholder="Título"
        />
        <textarea
          v-model="editedTask.description"
          class="w-full p-2 border rounded-md mb-4"
          placeholder="Descrição"
        ></textarea>
        <div class="flex justify-end gap-2">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            @click="updateTask"
          >
            Salvar
          </button>
          <button
            class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
            @click="isEditing = false"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Confirmação de Exclusão -->
    <div
      v-if="isConfirmingDelete"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <p class="text-lg font-semibold">Tem certeza que deseja excluir?</p>
        <div class="mt-4 flex justify-center gap-4">
          <button
            class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            @click="deleteTask"
          >
            Excluir
          </button>
          <button
            class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
            @click="isConfirmingDelete = false"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  tasks: Array<{ id: number; title: string; description: string }>;
}>();

const isEditing = ref(false);
const editedTask = ref({ id: 0, title: "", description: "" });

const isConfirmingDelete = ref(false);
const taskToDelete = ref<number | null>(null);

const openEditModal = (task: {
  id: number;
  title: string;
  description: string;
}) => {
  editedTask.value = { ...task };
  isEditing.value = true;
};

const updateTask = async () => {
  try {
    await $fetch(`/tasks/${editedTask.value.id}`, {
      method: "PUT",
      body: {
        title: editedTask.value.title,
        description: editedTask.value.description,
      },
    });
    isEditing.value = false;
    location.reload();
  } catch (error) {
    console.error("Erro ao atualizar a tarefa:", error);
  }
};

const confirmDelete = (id: number) => {
  taskToDelete.value = id;
  isConfirmingDelete.value = true;
};

const deleteTask = async () => {
  if (taskToDelete.value !== null) {
    try {
      await $fetch(`/tasks/${taskToDelete.value}`, { method: "DELETE" });
      isConfirmingDelete.value = false;
      location.reload();
    } catch (error) {
      console.error("Erro ao excluir a tarefa:", error);
    }
  }
};
</script>
