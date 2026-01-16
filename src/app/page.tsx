import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardImage } from '@/components/ui/Card';
import { menuItems } from '@/data/menu';
import { reviews, averageRating, restaurantInfo } from '@/data/restaurant';
import { Star, Clock, MapPin, Phone, ArrowRight, UtensilsCrossed, Calendar, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function Home() {
  const featuredItems = menuItems.filter(item => item.popular).slice(0, 6);
  const latestReviews = reviews.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80)',
          }}
        />

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-200">
            Authentic Italian Cuisine
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience the true taste of Italy with fresh ingredients and traditional recipes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order">
              <Button size="lg" className="text-lg">
                <ShoppingBag className="mr-2" size={24} />
                Order Online
              </Button>
            </Link>
            <Link href="/reservations">
              <Button size="lg" variant="secondary" className="text-lg">
                <Calendar className="mr-2" size={24} />
                Reserve a Table
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4">
                <UtensilsCrossed size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source the finest local and imported Italian ingredients for authentic flavors
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Online Ordering</h3>
              <p className="text-gray-600">
                Order your favorites for delivery or pickup with our easy online system
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Reservations</h3>
              <p className="text-gray-600">
                Book your table online for a guaranteed spot at your preferred time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Dishes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved dishes, crafted with passion and authentic Italian traditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <Card key={item.id} hover>
                <CardImage
                  src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80`}
                  alt={item.name}
                />
                <CardContent>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-xl font-bold text-orange-500">{formatPrice(item.price)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.dietary?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/order">
                    <Button className="w-full">Order Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button size="lg" variant="outline">
                View Full Menu
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i < Math.round(averageRating) ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-xl font-semibold">{averageRating.toFixed(1)} / 5.0</span>
            </div>
            <p className="text-gray-600">Based on {reviews.length} reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestReviews.map((review) => (
              <Card key={review.id}>
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < review.rating ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{review.comment}&quot;</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{review.customerName}</p>
                    {review.verified && (
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                        Verified
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 text-orange-500 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-gray-600">
                      {restaurantInfo.address.street}<br />
                      {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zipCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-orange-500 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href={`tel:${restaurantInfo.phone}`} className="text-gray-600 hover:text-orange-500">
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">Map integration here</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Opening Hours</h2>
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <Clock className="mr-3 text-orange-500" size={24} />
                  <span className="text-lg font-semibold text-green-600">Open Now</span>
                </div>
                <div className="space-y-3">
                  {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium capitalize">{day}</span>
                      <span className="text-gray-600">
                        {hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enjoy authentic Italian cuisine from the comfort of your home with our easy online ordering
          </p>
          <Link href="/order">
            <Button size="lg" variant="secondary" className="text-lg">
              <ShoppingBag className="mr-2" size={24} />
              Start Your Order
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
