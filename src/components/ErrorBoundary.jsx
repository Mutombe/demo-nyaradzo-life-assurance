import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, err: null };
  }
  static getDerivedStateFromError(err) {
    return { hasError: true, err };
  }
  componentDidCatch(err, info) {
    // eslint-disable-next-line no-console
    console.error('Site error:', err, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-[60vh] flex items-center justify-center px-6 bg-cream-50">
          <div className="max-w-lg text-center">
            <p className="eyebrow">Something went wrong</p>
            <h2 className="font-display text-3xl text-navy-700 mt-3 mb-5">
              We apologise — please refresh the page.
            </h2>
            <p className="text-charcoal-500 mb-6">
              If the issue persists, our advisors are always reachable on{' '}
              <a className="text-navy-600 underline" href="tel:+26342900935">
                +263 4 290 0935
              </a>
              .
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-navy-700 text-cream-50 text-sm tracking-wide hover:bg-navy-800"
              >
                Refresh page
              </button>
              <a
                href="/"
                className="px-5 py-2.5 border border-navy-700 text-navy-700 text-sm tracking-wide hover:bg-navy-700 hover:text-cream-50"
              >
                Back to home
              </a>
            </div>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}
