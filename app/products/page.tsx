import Link from "next/link";

async function Products() {
  const dataProducts = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=');
  const data = await dataProducts.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-amber-500 mb-8 border-b border-stone-800 pb-3">
        Our Delicious Products
      </h1>
      
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.meals?.map((item: any) => (
          <Link key={item.idMeal} href={`/products/${item.idMeal}`} className="group">
            <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 group-hover:border-amber-500/50 group-hover:shadow-amber-500/10">
              <div className="relative aspect-square overflow-hidden bg-stone-950">
                <img 
                  src={item.strMealThumb} 
                  alt={item.strMeal} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-stone-100 min-h-[56px] line-clamp-2 group-hover:text-amber-400 transition-colors">
                  {item.strMeal}
                </h3>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-stone-800/60 text-sm text-stone-400">
                  <span>ID: {item.idMeal}</span>
                  <span className="text-amber-500 font-medium group-hover:underline">View Details →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;