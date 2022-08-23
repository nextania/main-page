<script>
    import { goto } from "@roxi/routify";
</script>

<footer>
    <div class="p-10 bg-gray-800 text-gray-200">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div class="mb-5">
                    <h4 class="text-2xl pb-4">Nextflow</h4>
                    <p class="text-bookmark-grey">
                        Canada<br><br>
                        <strong>Email: </strong> support@nextflow.cloud<br>
                        <strong>Github: </strong> <a href="https://github.com/nextflow-cloud">Here</a>
                    </p>
                </div>
                <div class="mb-5">
                    <h4>Useful Links</h4>
                    <ul class="text-bookmark-grey mt-1">
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="/" class="hover:text-bookmark-red duration-300">Home</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="/enterprise" class="hover:text-bookmark-red duration-300">Enterprise Solutions</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="/services" class="hover:text-bookmark-red duration-300">Services</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="/about" class="hover:text-bookmark-red duration-300">About us</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="/downloads" class="hover:text-bookmark-red duration-300">Downloads</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="/terms" class="hover:text-bookmark-red duration-300">Terms of Service</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="/privacy" class="hover:text-bookmark-red duration-300">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="mb-5">
                    <h4>Services</h4>
                    <ul class="text-bookmark-grey mt-1">
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="https://github.com/nextflow-cloud/sso-system" class="hover:text-bookmark-red duration-300">SSO-System</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="/enterprise" class="hover:text-bookmark-red duration-300">SSO-System Homepage</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="https://github.com/nextflow-cloud/nextpass" class="hover:text-bookmark-red duration-300">NextPass</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="https://github.com/nextflow-cloud/easylink" class="hover:text-bookmark-red duration-300">Easylink</a></li>
                        <li class="pb-4"><i class="fa fa-chevron-right text-bookmark-purple"></i> <a href="https://github.com/nextflow-cloud/main-page" class="hover:text-bookmark-red duration-300">Main-page</a></li>
                    </ul>
                </div>
                <div class="mb-5">
                    <p class="font-light text-center mb-8">Be the first to contact us!</p>
                    <h1 class="text-3xl text-center">Get the latest news</h1>
                    <form action='/contact'>
                        <div class="flex flex-row gap-2 mt-8 flex-wrap"> <!--Hmm should i use rounded-md or rounded-lg?????-->
                            <input type="email" id="email2" name="email" placeholder="Enter your email" class="focus:outline-none w-20 flex-1 px-2 py-2 rounded-md text-black" required />
                            <button type="submit" id="contact2" class="btn bg-bookmark-red hover:bg-bookmark-white hover:text-black">Contact Us</button>
                        </div>
                    </form>
                    <p class="font-light text-center mb-10">We will not sell, nor store personally trackable information regarding your email.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full bg-gray-900 text-gray-500 px-10">
        <div class="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
            <div class="text-center">
                <div>
                    Copyright © {new Date().getUTCFullYear()} Nextflow Technologies B.V. All rights reserved.
                </div>
            </div>
            <div class="text-center text-xl text-white">
                <a href="https://twitter.com/nextflowcloud" class="w-10 h-10 rounded-full bg-bookmark-purple hover:bg-bookmark-purple mx-1 inline-block pt-1"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://github.com/nextflow-cloud" class="w-10 h-10 rounded-full bg-bookmark-purple hover:bg-bookmark-purple mx-1 inline-block pt-1"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
</footer>
<!-- <footer class="bg-bookmark-blue py-8" style="height:92px;">
    <div class="flex flex-col md:flex-row items-center mx-10">
        <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12 text-white">
            <img src="/nextflow.png" alt="" class="w-10"><h1 class="text-xl"><b>Nextflow</b></h1>
            <ul class="flex text-white gap-12 text-xs">
                <li on:click={() => $goto("/about")}>About us</li>
                <li on:click={() => $goto("/downloads")}>Downloads</li>
                <div on:click={() => $goto("/enterprise")}>Enterprise Solutions</div>
                <div on:click={() => $goto("/services")}>Services</div>
            </ul>
        </div>
        <div class="flex gap-10 mt-12 md:mt-0 text-white">
            Copyright © {new Date().getUTCFullYear()} Nextflow Technologies B.V. All rights reserved.
        </div>
    </div>
</footer> -->