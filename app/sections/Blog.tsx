'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/AnimatedSection'

const posts = [
  {
    id: 1,
    title: 'Medicare And Long Term Care',
    excerpt:
      'As seniors age, understanding Medicare and the range of long-term care options becomes. Many families are unsure which services',
    date: 'July 9, 2025',
    hasImage: false,
  },
  {
    id: 2,
    title: 'Medicare And Long Term Care',
    excerpt:
      'As seniors age, understanding Medicare and the range of long-term care options becomes. Many families are unsure which services',
    date: 'July 9, 2025',
    hasImage: true,
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80',
  },
  {
    id: 3,
    title: 'Medicare And Long Term Care',
    excerpt:
      'As seniors age, understanding Medicare and the range of long-term care options becomes. Many families are unsure which services',
    date: 'July 9, 2025',
    hasImage: false,
  },
]

export function Blog() {
  return (
    <section className="py-24 md:py-32 bg-[#FDF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest Insights
          </h2>
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                post.hasImage
                  ? 'relative'
                  : 'bg-[#F5EBE3] p-6'
              }`}
            >
              {post.hasImage ? (
                <>
                  {/* Image Background Card */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                        className="inline-block self-start px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                      >
                        {post.date}
                      </motion.span>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {post.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Only Card */}
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="inline-block px-4 py-1.5 border border-gray-400 text-gray-600 text-sm rounded-full mb-8"
                  >
                    {post.date}
                  </motion.span>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
