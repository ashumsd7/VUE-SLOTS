<template>
  <div>
      <header>
          <slot name="header"></slot>
      </header>
      <slot></slot>
  </div>
</template>
<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
 header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
</style>
