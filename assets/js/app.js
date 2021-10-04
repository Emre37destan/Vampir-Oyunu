/**
 * Vampire Slayer App.js
 * Contains Vue Code for the game
 * Version 1.0
 * Latisha McNeel
 * July 2018
 */
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        vampireHealth: 100,
        playing: false,
        messages: [],
        specialAttackCooldown: 0,
        specialAttack: false,
    },
    methods: {
        reset: function() {
            this.playing = true;
            this.playerHealth = 100;
            this.vampireHealth = 100;
            this.specialAttackCooldown = 0;
            this.specialAttack = false;
            this.messages = [];
        },
        attack: function() {
            if(this.specialAttackCooldown > 0){
                this.specialAttackCooldown = this.specialAttackCooldown - 1;
            }else{
                this.specialAttack = false;
            }
            const playerAttack = Math.floor(Math.random() * 10);
            const vampireAttack = Math.floor(Math.random() * 10);
            this.playerHealth = this.playerHealth - vampireAttack;
            this.vampireHealth = this.vampireHealth - playerAttack;

            this.messages.unshift({classes: 'alert-success', text: `<strong>${playerAttack}</strong> hasarı için Alucard'a saldırırsınız` });
            this.messages.unshift({classes: 'alert-warning', text: `Alucard size <strong>${vampireAttack}</strong> hasar için saldırır`});
            if(this.playerHealth <= 0){
                this.messages.unshift({classes: 'alert-danger', text: '<h3 class="alert-heading">Olamaz!</h3> Alucard seni öldürdü!'});
                this.playing = false;
            }else if(this.vampireHealth <= 0){
                this.messages.unshift({classes: 'alert-primary', text: '<h3 class="alert-heading">BÜYÜK İŞ AVCISI!</h3> Alucardı öldürdün. Dünya daha güvenli.'});
                this.playing = false;
            }
        },
        spAttack: function() {
            this.specialAttackCooldown = 3;
            this.specialAttack = true;
            const playerAttack = Math.floor(Math.random() * 15);
            const vampireAttack = Math.floor(Math.random() * 10);
            this.playerHealth = this.playerHealth - vampireAttack;
            this.vampireHealth = this.vampireHealth - playerAttack;

            this.messages.unshift({classes: 'alert-dark', text: `<strong>${playerAttack}</strong> hasarı için Alucard'a ÖZEL SALDIRI gerçekleştirdiniz` });
            this.messages.unshift({classes: 'alert-warning', text: `Alucard size <strong>${vampireAttack}</strong> hasar için saldırır`});
            if(this.playerHealth <= 0){
                this.messages.unshift({classes: 'alert-danger', text: '<h3 class="alert-heading">Olamaz!</h3> Alucard seni öldürdü!'});
                this.playing = false;
            }else if(this.vampireHealth <= 0){
                this.messages.unshift({classes: 'alert-primary', text: '<h3 class="alert-heading">BÜYÜK İŞ AVCISI!</h3> Alucardı öldürdün. Dünya daha güvenli.'});
                this.playing = false;
            }
        },
        heal: function() {
            if(this.specialAttackCooldown > 0){
                this.specialAttackCooldown = this.specialAttackCooldown - 1;
            }else{
                this.specialAttack = false;
            }
            const playerAttack = Math.floor(Math.random() * 10);
            const vampireAttack = Math.floor(Math.random() * 10);
            this.playerHealth = this.playerHealth - vampireAttack + playerAttack;

            this.messages.unshift({classes: 'alert-light', text: ` <strong>${playerAttack}</strong> hasarı için kendinizi iyileştirirsiniz` });
            this.messages.unshift({classes: 'alert-warning', text: `Alucard size <strong>${vampireAttack}</strong> hasar için saldırır`});
            if(this.playerHealth <= 0){
                this.messages.unshift({classes: 'alert-danger', text: '<h3 class="alert-heading">Olamaz!</h3> Alucard seni öldürdü!'});
                this.playing = false;
            }else if(this.vampireHealth <= 0){
                this.messages.unshift({classes: 'alert-primary', text: '<h3 class="alert-heading">GREAT JOB HUNTER!</h3> Alucardı öldürdün. Dünya daha güvenli.'});
                this.playing = false;
            }
        },
        giveUp: function() {
           this.reset();
           this.playing = false;
           this.messages.unshift({classes: 'alert-danger', text: '<h3 class="alert-heading">Kaçarsın!!</h3> Tamam Avcı. Bir dahaki sefere onu alacaksın!'})
        }
    }
});