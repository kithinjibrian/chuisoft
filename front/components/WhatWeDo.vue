<template>
    <div class="container mx-auto">
        <h3 class="text-4xl font-bold"><span class="italic text-gray-700 mr-3">01.</span> <span class="underline tracking-widest antialiased">What We Do.</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 p-3">
            <div></div>
            <div class="ml-3 md:ml-16 shadow-2xl">
                <expandables>
                    <template v-slot:title>
                        Web design & Development
                    </template>
                    <template v-slot:text>
                        You will love us when it comes to web designing, we are Leonardo da Vinci, Vincent van Gogh and Michelangelo combined, but rather than painting on a canvas we do it on a screen with computer languages as our brushes. We begin every project with rigorous research and strategy to guide our design and development, the result is a rock solid process that leaves little room for unwelcome surprises. When it comes to custom web design, we’ve done it all
                    </template>
                </expandables>
                <expandables>
                    <template v-slot:title>
                        Ecommerce website
                    </template>
                    <template v-slot:text>
                        It's the Golden Age of the internet, now more than ever your shop needs an online presence. Who better than us design the face of your business.
                    </template>
                </expandables>
                <expandables>
                    <template v-slot:title>
                        Website Hosting
                    </template>
                    <template v-slot:text>
                        This service is for free. If we develop a website for you it has to be hosted anyway for others on the internet to access it. We will task ourself with finding the best web hosting company and host the website for you.
                    </template>
                </expandables>
                <expandables>
                    <template v-slot:title>
                        Mobile & Desktop applications
                    </template>
                    <template v-slot:text>
                        <div>
                            <p class="mb-2">Desktop Programs.</p>
                            <p class="ml-2 p-1">Your company, business or institution may be in need of a custom program that solves a specific task in your organization, reach us now. </p>
                            <p class="ml-2 p-1 mb-2">We develop systems like Bulk sms softwares, library management softwares, store management softwares, timetable generators, hotel management softwares, customer relationship management(CRM) and customised point of sale softwares (POS). All customised to meet your need.</p>
                            <p class="mb-2">Mobile Applications.</p>
                            <p class="ml-2 p-1">Not too different from websites. If you have a website that also needs to have its mobile counterpart, reach us. The applications may be native apps, progressive web apps, cross-platform apps built using tools like react native or flutter.</p>
                        </div>
                    </template>
                </expandables>
                <expandables>
                    <template v-slot:title>
                        IT Services & Services
                    </template>
                    <template v-slot:text>
                        We install Operating Systems(OS), computer drivers, Anti-virus softwares, data backups and configure printers on a network. We even provide consultancy, call us if you have any issue with your computer and we will help you.
                    </template>
                </expandables>
                <expandables>
                    <template v-slot:title>
                        Data analysis
                    </template>
                    <template v-slot:text>
                        <p>Want some key insights to your data that no human can unearth. Chuisoft uses the latest cutting edge machine learning models to analyse your data. May be you want to forecast the sales of your business or even know when to cut down all increase the production of a commodity in your company.</p>
                        <p>Call us today, we have some artificial intelligence(AI) specialist who might be able to help  you.</p>
                    </template>
                </expandables>
            </div>
        </div>
    </div>
</template>