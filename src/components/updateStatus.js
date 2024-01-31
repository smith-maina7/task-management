import { taskStore, props, selectedStatus } from "./listOptions.vue";

export const updateStatus = async () => {
await taskStore.updateTaskStatus(props.taskId, selectedStatus.value);
if (res === 200) {
selectedStatus = "";
}
};
