<template>

    <section>
        <form ref="form" @submit.prevent="sendEmail">
            <div>
                <label class="font-extralight">Name<span class="text-red-500"> *</span></label><br>
                <input class="w-full p-2 rounded-lg mt-2 border-solid border-2" type="text" name="user_name"><br>
            </div>

            <div class="mt-4">
                <label class="font-extralight">Email<span class="text-red-500"> *</span></label><br>
                <input class="w-full p-2 rounded-lg mt-2 border-solid border-2" type="email" name="user_email"><br>
            </div>

            <div class="mt-4">
                <label class="font-extralight">Subject</label><br>
                <input class="w-full p-2 rounded-lg mt-2 border-solid border-2" type="subject" name="user_subject"><br>
            </div>

            <div class="mt-4">
                <label class="font-extralight">Message<span class="text-red-500"> *</span></label><br>
                <textarea name="message" class="w-full h-56 p-2 rounded-xl text-xl mt-2 border-solid border-2" style="resize: none;" placeholder="Please enter your message here"></textarea><br>
            </div>

            <div class="mt-4 float-right">
                <input type="submit" class=" cursor-pointer hover:bg-purple-700 text-lg font-medium bg-blue text-white rounded-full px-8 py-2 mt-2" value="Send"><br>
            </div>

            <div class="mt-4">
                <p class="text-sm">By using this email service, the user agrees that no official transactions will be declared using this service.*</p>
            </div>
        </form>
    </section>
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