'use client';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const propertySchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  propertyType: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  // Add all other validations
});

export default function PostPropertyForm() {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      // Handle file upload
    }
  });

  return (
    <div className={`min-h-screen bg-black/90 py-12 px-4 sm:px-6 lg:px-8 ${jakarta.className}`}>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GMAPS_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-8">
          List Your Property
        </h2>

        <Formik
          initialValues={{
            title: '',
            propertyType: '',
            // Add all initial values
          }}
          validationSchema={propertySchema}
          onSubmit={values => {
            // Handle form submission
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Property Details */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/30 p-6 rounded-xl border border-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <span className="text-purple-400">1️⃣</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Property Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-300">Property Title</label>
                    <Field
                      name="title"
                      className="w-full bg-black/40 backdrop-blur-lg px-4 py-3 rounded-lg border border-purple-500/20 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white"
                    />
                    <ErrorMessage name="title" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-300">Property Type</label>
                    <Field
                      as="select"
                      name="propertyType"
                      className="w-full bg-black/40 backdrop-blur-lg px-4 py-3 rounded-lg border border-purple-500/20 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white"
                    >
                      <option value="">Select Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      {/* Add other options */}
                    </Field>
                  </div>

                  {/* Add other fields */}
                </div>
              </motion.div>
              <div className='text-gray-500'>
                * NOTE THAT ALL OF THE PROPERTIES WILL BE VERIFIED BY THE ADMIN BEFORE GETTING LISTED
              </div>
              <div className="space-y-2">
                <label className="text-gray-300 text-xl font-semibold">2️⃣ Set a fair price</label>
                <Field
                  name="title"
                  className="w-full bg-black/40 backdrop-blur-lg px-4 py-3 rounded-lg border border-purple-500/20 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white"
                />
                <ErrorMessage name="title" component="div" className="text-red-400 text-sm" />
              </div>
              {/* Section 3: Media Upload */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/30 p-6 rounded-xl border border-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <span className="text-purple-400">3️⃣</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Media Upload</h3>
                </div>

                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <div className="space-y-3">
                    <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <p className="text-gray-400">Drag & drop images here, or click to select</p>
                    <p className="text-sm text-gray-500">Maintain a high-quality image (JPEG, PNG)</p>
                  </div>
                </div>
              </motion.div>

              {/* Section 4: Amenities */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/30 p-6 rounded-xl border border-purple-500/20"
              >

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <span className="text-purple-400">4️⃣</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Amenities Provided</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['parking', 'pool', 'gym', 'security', 'power', 'lift', 'clubhouse', 'garden'].map(amenity => (
                    <label key={amenity} className="flex items-center space-x-3 p-3 hover:bg-purple-500/10 rounded-lg cursor-pointer">
                      <Field
                        type="checkbox"
                        name="amenities"
                        value={amenity}
                        className="form-checkbox h-5 w-5 text-purple-500 border-purple-500/50 rounded focus:ring-purple-500/30 bg-black/40"
                      />
                      <span className="text-gray-300 capitalize">{amenity}</span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Section 5: Seller Verification */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black/30 p-6 rounded-xl border border-purple-500/20"
              >
                {/* Verification fields */}
              </motion.div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black rounded-2xl font-semibold hover:shadow-lg cursor-pointer hover:shadow-purple-500/30 hover:bg-black hover:text-white duration-500 transition-all"
              >
                List Property Now
              </button>
            </form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
}