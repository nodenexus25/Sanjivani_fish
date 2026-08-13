import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The page you were looking for at Sanjivani Fisheries could not be found." />
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg">
          <div className="text-[120px] sm:text-[160px] font-serif font-bold leading-none text-teal-800/10 select-none">404</div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-teal-800 -mt-12 sm:-mt-16 mb-4">
            These waters are uncharted.
          </h1>
          <p className="text-charcoal/75 mb-8 leading-relaxed">
            The page you were looking for doesn't exist or may have been moved.
            Let's head back to safer shores.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary w-full sm:w-auto">Back to Home</Link>
            <Link to="/contact" className="btn-secondary w-full sm:w-auto">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
