const CTASection = () => {
  return (
    <section className="bg-cta py-16" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Do You Have Questions?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          We'll help you to grow your career and growth. Get in touch with us today.
        </p>
        <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-xl text-lg">
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default CTASection;
