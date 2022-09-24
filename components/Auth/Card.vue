<template>
  <div>
    <NCard class="card">
      <h2 class="title">Login</h2>
      <div class="inputs">
        <input class="input" type="email" placeholder="Email">
        <input class="input" type="password" placeholder="Password">
      </div>
      <NButton>Login</NButton>
    </NCard>
  </div>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  width: 25rem;
}

.title {
  font-size: 1.75rem;
  margin-bottom: .75rem;
}

.inputs {
  display: flex;
  flex-direction: column;
}

.input {
  margin-bottom: .9rem;
  padding: .25rem;
  outline: none;
  border: .1rem solid rgba(0, 0, 0, .1);
  border-radius: .25rem;
}
</style>
