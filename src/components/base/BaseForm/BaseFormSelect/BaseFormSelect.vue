<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="inline-block mb-2 font-medium">{{ label }}</label>
    <PDropdown
      v-bind="$attrs"
      v-model="inputValue"
      class="w-full"
      :class="[!input.isValid ? 'p-invalid' : '']"
      placeholder="..."
      :options="options"
      :input-id="id"
      @change="onChangeValue"
    >
      <template v-if="$slots.value" #value="{ value }">
        <slot v-if="value" name="value" :value="value" />
      </template>
      <template v-if="$slots.option" #option="{ option }">
        <slot v-if="option" name="option" :option="option" />
      </template>
    </PDropdown>
    <p v-if="!input.isValid" class="flex items-center mt-2 font-medium text-red-500 text-xs">
      <i class="mr-2 pi pi-exclamation-triangle" />
      {{ input.message }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import useValidation from '@/composables/useValidation'

  interface BaseFormSelectProps {
    modelValue: null
    label: string
    id: string
    options: Array<(...args: any[]) => string>
    rules?: Array<(...args: any[]) => string>
  }

  const props = withDefaults(defineProps<BaseFormSelectProps>(), {
    modelValue: null,
    label: '',
    id: '',
    options: () => [],
    rules: () => [],
  })

  const emit = defineEmits(['update:modelValue'])

  const inputValue = ref(props.modelValue)
  const input = ref<{ message: string; isValid: boolean }>(useValidation(inputValue.value, props.rules, false))
  const isValid = ref<boolean>(input.value.isValid)

  const onChangeValue = ({ value }: any) => {
    if (props.rules.length) {
      validate(value)
    }
    emit('update:modelValue', value)
  }
  const validate = (v = inputValue.value) => {
    input.value = useValidation(v, props.rules)
    isValid.value = input.value.isValid
  }

  defineExpose({
    isValid,
    validate,
  })
</script>
