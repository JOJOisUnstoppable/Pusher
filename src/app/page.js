import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
      {/* Hero + CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Universal Organizer for Cans & Bottles
            </h1>
            <p className="text-xl mb-8">
              This pusher is compatible with all kinds of cans and bottles, perfect for organizing sodas, beers, water bottles, and other similar-sized items in your fridge, pantry, or even a compact bar area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-center transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/catalog"
                className="bg-transparent hover:bg-white/20 border-2 border-white py-3 px-8 rounded-lg text-center transition-colors"
              >
                Download Catalog
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <video
              src="/videos/hero_video.mp4"
              alt="Universal Can & Bottle Organizer"
              width={630}
              height={480}
              className="rounded-lg shadow-lg object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
      {/* 新增：产品卡片 Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Our Range of Retail Shelf Pusher
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                img: "/images/Drink_pusher/drink_organized_1.png",
                title: "Drink Pusher System",
                desc: "Advanced spring-loaded design for beverage organization. Perfect for cans and bottles, ensuring automatic front-facing display in refrigerators and shelves."
              },
              {
                img: "/images/Cigarette_pusher/Cigarette_pusher_1.png",
                title: "Cigarette Pusher Display",
                desc: "Specialized pusher system for tobacco products. Features automatic replenishment and adjustable width for various cigarette package sizes."
              },
              {
                img: "/images/customized_width/customized_width_1.png",
                title: "Customizable Width Pusher",
                desc: "Versatile pusher system with adjustable width settings. Ideal for retail environments requiring flexible product organization solutions."
              },
              {
                img: "/images/Patented_product_snus/Patented_product_snus_1.png",
                title: "Patented Snus Pusher",
                desc: "Innovative patented design specifically for snus products. Features unique curved design and automatic front-facing display system."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#ebebeb] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col items-center pt-8 px-4 pb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={180}
                  height={120}
                  className="object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 新增：卡片下方提示语 Section，背景色与上一块一致 */}
      <section className="w-full bg-white py-8">
        <div className="flex flex-col items-center">
          <div className="border border-blue-200 rounded-lg px-6 py-5 flex flex-col md:flex-row items-center justify-center gap-4 shadow-sm max-w-2xl mx-auto">
            <span className="text-blue-700 font-medium text-base md:text-lg text-center">
              Can't find the perfect product you need? Contact us directly for a free custom solution!
            </span>
            <Link
              href="/contact"
              className="mt-3 md:mt-0 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>
      {/* 新增：行业定制化方案 Section */}
      <section className="w-full bg-gray-50 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Shelf Pusher Solutions Tailored To Your Industry
          </h2>
          <p className="text-lg text-gray-700 text-center mb-20 max-w-[1400px] mx-auto leading-relaxed">
            HY, established in 2020, has gained recognition through over 13 patents and by fostering strong cooperative relationships with customers both domestically and internationally. As the original manufacturer of drinks pushers, HY controls the entire production process, ensuring quality from tooling to packaging. HY aims to be the most efficient show shelfmaker and would like to be your best supplier. HY promises "Qualified productExcellent serviceCompetitive price and Prompt delivery". HY has world wide and happy cooperation from customers both domestic and abroad. They are the original manufacturer of drinks pushers, in charge of the whole production process including tooling/plastic injection/springs assembly/packaging etc. HY's cooperative brands include Vanguard, Walmart, Bravis, SCbolei, METRO, and Alibaba.com.
          </p>
          <div className="grid md:grid-cols-4 gap-10">
            {/* 优点1 */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-lg transition-shadow">
              <img src="/images/home/Customizable.png" alt="Customizable" className="w-14 h-14 mb-5" />
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Customizable to Your Needs</h3>
              <p className="text-gray-600 text-center text-base">Adjustable width and configuration to perfectly fit different items and maximize your space.</p>
            </div>
            {/* 优点2 */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src="/images/home/Solution.png" alt="Customizable" className="w-14 h-14 mb-5" />
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Affordable Solution</h3>
              <p className="text-gray-600 text-center text-base">A cost-effective way to improve organization without the extra cost of complex systems.</p>
            </div>
            {/* 优点3 */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-lg transition-shadow">
              <img src="/images/home/Durable.png" alt="Durable" className="w-14 h-14 mb-5" />
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Durable & Easy to Use</h3>
              <p className="text-gray-600 text-center text-base">Made from sturdy plastic, long-lasting and quick to install for most fridges and shelves.</p>
            </div>
            {/* 优点4 */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-lg transition-shadow">
              <img src="/images/home/Flexible.png" alt="Flexible Order" className="w-14 h-14 mb-5" />
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Flexible Order Quantity</h3>
              <p className="text-gray-600 text-center text-base">Order in quantities that suit your business needs, whether for small shops or large supermarkets.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 新增：产品优势 Section */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto px-4" style={{maxWidth: '1400px'}}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Our Shelf Pusher Solutions?
          </h2>
          
          {/* 第一行：Drink organizer */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/Drink_pusher/drink_organizer_2.png"
                alt="Professional Manufacturing"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">DRINK ORGANIZER</h3>
              <p className="text-gray-700 mb-6 text-lg">
                This system reduces the need for frequent restocking, saving time and labor costs.  
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Material: PS/PC+ABS+SUS304</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Product application:Automatic advancement of beverage arrangement on shelves or refrigerators</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Widely Use:The Drink organizer for refrigerator features an integrated spring pusher design that
                  automatically and smoothly slides your drink forward.This ensures that your drink is always prominently displayed for easy access.It's suitable for various beverage types and environments.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 第二行：customized width pusher shelf */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <Image
                src="/images/customized_width/customized_width_2.png"
                alt="Global Service Network"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Customized Width Pusher Shelf</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Keeping products organized and front-faced.Making items more appealing to customers and reducing the risk of product loss.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Material: ABS/PET/POM+PVC+SUS304</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Color:Transparent/white/customizable</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Spring strength:3N/4N/5N/6N/7N/Customizable</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Adhesive customization:Can be pasted 3M tape/no trace glue/sponge glue</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 第三行：Cigarette pusher*/}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/Cigarette_pusher/Cigarette_pusher_2.png"
                alt="Customization Capability"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Cigarette Pusher</h3>
              <p className="text-gray-700 mb-6 text-lg">
                No need for tilting, automatic replenisment, specially designed for cigarette of various widths and heights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Material: PS/PC+ABS+SUS304</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Color: Transparent</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Customized freely</span>
                </li>
              </ul>
            </div>
          </div>
          {/* 第四行：Patented Product Snus Pusher*/}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/Patented_product_snus/Patented_product_snus_2.png"
                alt="Snus Pusher Product"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Patented Product Snus Pusher</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Keeping a sleek aesthetic that impress your guest.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Material: PS/PC+ABS+SUS304</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Color: Transparent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 新增：Case Study Section */}
      <section className="w-full py-16 bg-white">
        <div className="mx-auto px-4" style={{maxWidth: '1400px'}}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Recent News from Retail Space Solutions
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* 新闻列表 */}
            <div className="flex-1 flex flex-col gap-8">
              {/* 新闻1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 w-full flex-shrink-0">
                  <Image
                    src="/images/news1.jpg"
                    alt="refrigerated pollo asada, carnitas and chile verde in Retail Space Solutions pusher trays"
                    width={512}
                    height={268}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 w-full flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">3 Ways Grocers Can Appeal to Latino Shoppers</h3>
                  <p className="text-gray-700 mb-2">
                    These three considerations can allow grocers to stand out to today's Latino shoppers and their $4 trillion in buying power.
                  </p>
                  <Link
                    href="/blog/ways-grocers-can-appeal-to-latino-shoppers"
                    className="text-blue-700 underline font-semibold hover:text-blue-900 transition-colors"
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
              {/* 新闻2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 w-full flex-shrink-0">
                  <Image
                    src="/images/news2.jpg"
                    alt="Fresh produce in Retail Space Solutions Pusher Trays"
                    width={512}
                    height={268}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 w-full flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">3 Tips to Improve the Produce Department Experience</h3>
                  <p className="text-gray-700 mb-2">
                    For grocery stores and mass retailers, these three tips can help improve produce section performance and elevate the in-store shopping experience to grow sales.
                  </p>
                  <Link
                    href="/blog/improve-the-produce-department-experience"
                    className="text-blue-700 underline font-semibold hover:text-blue-900 transition-colors"
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
              {/* 新闻3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 w-full flex-shrink-0">
                  <Image
                    src="/images/news3.jpg"
                    alt="cheese slices in Retail Space Solutions pusher trays at a grocery store"
                    width={512}
                    height={268}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 w-full flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">Understanding Consumer Behaviors Amidst Inflation</h3>
                  <p className="text-gray-700 mb-2">
                    Understand the behaviors of today's inflation shopper to better meet their wants, needs and expectations.
                  </p>
                  <Link
                    href="/blog/understanding-consumer-behaviors-amidst-inflation"
                    className="text-blue-700 underline font-semibold hover:text-blue-900 transition-colors"
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>
            {/* 订阅卡片 */}
            <div className="md:w-80 w-full flex-shrink-0 bg-blue-700 text-white rounded-xl flex flex-col items-center justify-center px-8 py-10 mt-8 md:mt-0">
              <Image
                src="/icons/newsletter.svg"
                alt="Newsletter icon"
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-4 text-center">Subscribe to Our Newsletter for the Latest Retail Industry News and Insights</h3>
              <Link
                href="/subscribe"
                className="underline font-bold text-white hover:text-yellow-300 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Order Processing Flow Section */}
      <section className="w-full bg-gray-50 py-32">
        <div className="mx-auto px-4" style={{maxWidth: '1400px'}}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            Professional Order Processing Flow
          </h2>
          
          <div className="relative py-10">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-blue-200 -translate-y-1/2 hidden md:block"></div>
            
            {/* Steps Container */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg">
                  01
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Order Confirmation</h3>
                <p className="text-gray-600">Confirm order details and specifications within 24 hours</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg">
                  02
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Production Preparation</h3>
                <p className="text-gray-600">Prepare materials and equipment for production</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg">
                  03
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Manufacturing</h3>
                <p className="text-gray-600">Strict production according to quality standards</p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg">
                  04
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Quality Inspection</h3>
                <p className="text-gray-600">Comprehensive quality testing and verification</p>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg">
                  05
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Shipping Service</h3>
                <p className="text-gray-600">Arrange delivery with tracking service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto px-4" style={{maxWidth: '1400px'}}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            {/* 联系信息 */}
            <div className="md:w-1/3">
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">123 Business Street, Ningbo, Zhejiang, China</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800">
                      info@example.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <a href="tel:+86123456789" className="text-blue-600 hover:text-blue-800">
                      +86 123 456 789
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="md:w-2/3">
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 你可以继续添加其他内容 */}
    </main>
  )
}
