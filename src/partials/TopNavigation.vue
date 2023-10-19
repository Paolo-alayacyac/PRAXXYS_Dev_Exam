<template>
    <div id="main-content">
        <ion-header class="ion-no-border">
            <ion-toolbar class="toolbar">
                <div class="topheader">
                    <ion-buttons>
                        <ion-menu-button class="burger">
                            <img alt="button" src="./../../public/assets/menu/burger.svg" />
                        </ion-menu-button>
                    </ion-buttons>
                    <a href="/loyalty">
                        <div class="flex">
                            <div class="flex">
                                <img class="crown" alt="Crown" src="./../../public/assets/menu/crown1.png" />
                                <ion-item>
                                    <p>0 Points</p>
                                </ion-item>
                                <img class="arrow" alt="Arrow" src="./../../public/assets/menu/Vector.png" />
                            </div>
                        </div>
                    </a>
                    <ion-avatar slot="end" class="img2">
                        <img alt="Profile pic" src="./../../public/assets/menu/Avatar.svg" />
                    </ion-avatar>
                </div>
            </ion-toolbar>
        </ion-header>
    </div>
</template>

<script setup lang="ts">
import {
    IonButtons,
    IonMenuButton,
    IonItem,
    IonAvatar,
    IonHeader,
    IonToolbar,
} from "@ionic/vue";
</script>