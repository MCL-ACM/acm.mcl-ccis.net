<template>
    <!-- <form>
        <label for="name">Name</label><br>
        <input type="text" id="name" name="name"><br>

        <label for="email">Email</label><br>
        <input type="text" id="email" name="email"><br>

        <label for="subject">Subject</label><br>
        <input type="text" id="subject" name="subject"><br>

        <label for="message">Message</label><br>
        <input type="text" id="message" name="message"><br>
        <button class="font-bold py-2 px-8 rounded-full bg-blue text-white">Send</button>
    </form> -->
    <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label><br>
        <input type="text" name="user_name"><br>

        <label>Email</label><br>
        <input type="email" name="user_email"><br>

        <label>Subject</label><br>
        <input type="subject" name="user_subject"><br>

        <label>Message</label><br>
        <textarea name="message"></textarea><br>

        <input type="submit" value="Send"><br>
    </form>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_h4nxt1g', 'template_xozr0ko', this.$refs.form, 'user_HjRyAOakAT9wan4erehrS')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>

<style>

</style>