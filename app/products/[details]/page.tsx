type Props = {
  params: { details: any };
};

async function Details({ params }: Props) {
  const id = (await params).details;
  const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await resp.json();
  const meal = data.meals?.[0];

  if (!meal) {
    return <div className="text-center text-white py-20 text-xl">Meal not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 flex-1 flex items-center justify-center">
      <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 lg:p-8">
        
      
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-stone-800">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="object-cover w-full h-full" />
          <div className="absolute top-4 left-4 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
            {meal.strCategory}
          </div>
        </div>

        
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">{meal.strArea} Cuisine</span>
            <h1 className="text-3xl lg:text-4xl font-black text-white mt-1 mb-4">{meal.strMeal}</h1>
            
            <h3 className="text-stone-400 font-medium mb-2 text-sm uppercase tracking-wide">Instructions:</h3>
            <p className="text-stone-300 text-sm leading-relaxed max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
              {meal.strInstructions}
            </p>
          </div>


          <div className="pt-4 border-t border-stone-800 space-y-3">
            {meal.strTags && (
              <div className="flex flex-wrap gap-2">
                {meal.strTags.split(',').map((tag: string) => (
                  <span key={tag} className="bg-stone-800 text-stone-400 text-xs px-2.5 py-1 rounded-md">
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              {meal.strYoutube && (
                <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-2.5 px-4 rounded-lg transition-colors shadow-md shadow-red-900/20">
                  Watch on YouTube
                </a>
              )}
              {meal.strSource && (
                <a href={meal.strSource} target="_blank" rel="noreferrer" className="flex-1 text-center bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm py-2.5 px-4 rounded-lg transition-colors border border-stone-700">
                  Recipe Source
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Details;