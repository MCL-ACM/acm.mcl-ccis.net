<template>
    <section class="">
        <ContactModal v-show="isModalVisible"  @close="closeModal"/>
        <form ref="form" @submit.prevent="sendEmail">
            <div>
                <label class="font-extralight">Name<span class="text-red-500"> *</span></label><br>
                <input v-model="user_name" required class="w-full p-2 rounded-lg mt-2 border-solid border-2" type="text" name="user_name" ><br>
            </div>

            <div class="mt-4">
                <label class="font-extralight">Email<span class="text-red-500"> *</span></label><br>
                <input v-model="user_email" required class="w-full p-2 rounded-lg mt-2 border-solid border-2" type="email" name="user_email"><br>
            </div>

            <div class="mt-4">
                <label class="font-extralight">Subject</label><br>
                <input class="w-full p-2 rounded-lg mt-2 border-solid border-2" type="subject" name="user_subject"><br>
            </div>

            <div class="mt-4">
                <label class="font-extralight">Message<span class="text-red-500"> *</span></label><br>
                <textarea v-model="message" required name="message" class="w-full h-56 p-2 rounded-xl text-xl mt-2 border-solid border-2" style="resize: none;" placeholder="Please enter your message here"></textarea><br>
            </div>

            <div class="mt-4 float-right">
                <Button type="submit" text="Send" class="px-10" value="Send"></Button><br>
            </div>
            <ul v-if="checkForm() == false && trySent" class="list-item list-disc">
                <li  class="pt-4">Name, Email, and Message must be filled!</li>
            </ul>
            
        </form>
    </section>
</template>

<script>
import {sendForm} from 'emailjs-com';


export default {
    
    data(){
        return{
            isModalVisible: false,
            user_name: null,
            user_email: null,
            message: null,
            trySent: false
        }
    },

    methods: {
        onlyWS(input){
            if(input){
                return(!input.replace(/\s/g, '').length)
            }
        },

        checkForm(){
            return(
                this.user_email&&
                this.message &&
                this.user_email &&
                !this.onlyWS(this.user_name) 
                && !this.onlyWS(this.user_email) 
                && !this.onlyWS(this.message)
            )
            
        },

        checkEmail(){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            return re.test(this.user_email);
        },

        sendEmail() {
            if(this.checkForm() && this.checkEmail()) {
                sendForm(process.env.SERVICE_KEY, process.env.TEMPLATE_KEY, this.$refs.form, process.env.USER_KEY)
                    .then((result) => {
                        console.log('SUCCESS!', result.text)
                    }, (error) => {
                        console.log('FAILED...', error.text)
                    })
                this.showModal()
                this.trySent = false
            } else{
                this.trySent = true
            }
        },
        
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}
</script>

<style>

</style>