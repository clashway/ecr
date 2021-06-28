import Head from 'next/head';
import Image from 'next/image';
import CopyText from '../components/CopyText';

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row justify-between">
            <Head>
                <title>About</title>
            </Head>
            
            <CopyText className="max-w-4xl pr-10">
                <p>When I first started preparing my own meals as a young adult, my idea of cooking was boiling pasta and heating up a jar of store-bought tomato sauce. My salads were topped with bottled dressing, and I didn’t think twice about using a box of brownie mix. But, while it’s true my cooking skills were practically non-existent, I always loved to eat delicious food.</p>
                <p>That interest in good food slowly became an obsession. I started cooking more, ripping out recipes in magazines, taking recreational cooking classes, refusing to vacation anywhere that didn’t have food worth eating, and learning kitchen secrets from my Italian mother-in-law. Then, when my child was born I picked up a whisk and never looked back. I made homemade baby food and, soon, earned a culinary arts degree from the Institute of Culinary Education in New York City.</p>
                <p>In the summer of 2008 I launched <a href="http://www.rosaberry.com" rel="noopener">Rosaberry</a>, a culinary services company devoted to helping New York families eat better through culinary instruction and personal chef services. And now, after several years as food editor at <a href="http://www.parents.com/recipes" rel="noopener">Parents</a>&nbsp;and <a href="http://www.health.com">Health</a> magazines, I’m the food director at <a href="http://www.realsimple.com">Real Simple</a>. I’ve appeared on the <a href="https://www.jennahelwig.com/video/" rel="noopener">Today Show numerous times demonstrating kid-friendly recipes</a>. My first two cookbooks <a href="https://www.jennahelwig.com/books/" rel="noopener">Real Baby Food: Easy All-Natural Recipes for Your Baby and Toddler</a>&nbsp;and <a href="https://www.jennahelwig.com/books/" rel="noopener">Smoothie-licious: Power-Packed Smoothies and Juices the Whole Family Will Love</a>&nbsp;were released in 2015 by Houghton Mifflin Harcourt. My third book, <em><a href="https://www.amazon.com/Baby-Led-Feeding-Natural-Independent-Eaters/dp/0544963407/">Baby-Led Feeding</a></em>, debuted in March 2018, and <a href="https://www.amazon.com/gp/product/0358108578/"><em>The Multi-Cooker Baby Food Cookbook</em></a> will be launched in November 2019.</p>
                <p>Through my <a href="https://www.jennahelwig.com/books/" rel="noopener">books</a>, <a href="https://www.jennahelwig.com/blog/" rel="noopener">blog</a>, magazine writing, and video I’m excited to continue helping families eat healthfully, happily, and deliciously.</p>
            </CopyText>

            <div className="max-w-lg m-auto lg:m-0">
                <Image 
                    src="/ecr.jpg"
                    width="500"
                    height="500"
                    alt="ecr"
                    layout="fixed"
                />
            </div>


        </div>
    )
}