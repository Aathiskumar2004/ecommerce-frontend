export default function About() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <h1 className=" mt-9 text-3xl font-semibold text-center mx-auto">About Our Clothing Store</h1>

            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                Discover fashion crafted with quality, comfort, and style — designed to elevate your everyday look.
            </p>

            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>

                {/* 1 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn-icons-png.flaticon.com/512/10348/10348240.png" alt="Quality Fabric" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Premium Quality Fabrics</h3>
                        <p className="text-sm text-slate-500">Soft, durable, and comfortable materials designed for everyday wear.</p>
                    </div>
                </div>

                {/* 2 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://img.icons8.com/emoji/48/shopping-bags.png" alt="Trendy Designs" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Trendy & Modern Designs</h3>
                        <p className="text-sm text-slate-500">Stay fashionable with the latest styles curated just for you.</p>
                    </div>
                </div>

                {/* 3 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/fit-5646527-4716330.png" alt="Perfect Fit" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Perfect Fit Guaranteed</h3>
                        <p className="text-sm text-slate-500">Designed with precise measurements to ensure a comfortable fit.</p>
                    </div>
                </div>

                {/* 4 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://thumbs.dreamstime.com/z/fast-delivery-transparent-icon-symbol-design-logistic-collection-130311316.jpg" alt="Fast Delivery" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Fast & Secure Delivery</h3>
                        <p className="text-sm text-slate-500">Get your orders quickly with safe and reliable shipping.</p>
                    </div>
                </div>

                {/* 5 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://st3.depositphotos.com/5266903/17029/v/950/depositphotos_170298602-stock-illustration-customization-vector-icon.jpg" alt="Customization" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Unique & Custom Styles</h3>
                        <p className="text-sm text-slate-500">Exclusive collections designed to reflect your personality.</p>
                    </div>
                </div>

                {/* 6 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://cdn3.iconfinder.com/data/icons/miscellaneous-311-mix/168/trusted_control_shield_quality_guarantee_privacy_verified-256.png" alt="Trusted Quality" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">Trusted by Thousands</h3>
                        <p className="text-sm text-slate-500">We deliver quality clothing customers love and rely on.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
