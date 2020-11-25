<template>
    <section class="slider">
        <img :src="'./src/images/slider' + activeSlider + '.jpg'"
            alt="Slider image"
        />

        <div class="slider-controller">
            <button class="btn btn-icon"
                    @click="controllerAction('prev')"
            >
                <b-icon icon="chevron-left"
                    font-scale="1"
                ></b-icon>
            </button>

            <button class="btn btn-icon"
                    @click="controllerAction('next')"
            >
                <b-icon icon="chevron-right"></b-icon>
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Slider',

	    data() {
        	return {
		        activeSlider: 1,
	        }
	    },

	    methods: {
		    controllerAction(action) {
		    	if(action == 'next') {
		    		if(this.activeSlider < 8) {
					    this.activeSlider++;
				    } else {
		    			this.activeSlider = 1;
				    }

			    } else {
		    		if(this.activeSlider > 1) {
		    			this.activeSlider--;
				    } else {
		    			this.activeSlider = 8;
				    }
			    }
		    },

		    setAutoCarousel() {
			    const _this = this;

			    setInterval(function() {
				    _this.controllerAction('next');
			    }, 10000);
		    }
	    },

	    mounted() {
			this.setAutoCarousel();
	    }
    }
</script>

<style lang="less">
    .slider {
        position: relative;
        height: 580px;
        display: flex;
        align-items: center;
        overflow: hidden;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        & .slider-controller {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: space-between;

            & button {
                padding: 1rem !important;
                color: #fff !important;
                background: rgba(153, 153, 153, .5) !important;

                &:hover,
                &:active,
                &:focus {
                    color: #000 !important;
                }
            }
        }
    }
</style>