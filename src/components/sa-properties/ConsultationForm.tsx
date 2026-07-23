import { useState, type FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const CONTACT_EMAIL = 'info@fastinpropertyauctions.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type ConsultationFormProps = {
  developmentName: string;
  formType: 'consultation' | 'investment-pack';
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

function isFormSubmitSuccess(value: unknown): boolean {
  return value === true || value === 'true';
}

export default function ConsultationForm({ developmentName, formType }: ConsultationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isConsultation = formType === 'consultation';
  const heading = isConsultation ? 'Book a Consultation' : 'Request Full Investment Pack';
  const subject = isConsultation
    ? `SA Property Consultation — ${developmentName}`
    : `Investment Pack Request — ${developmentName}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'Not provided',
          message: message || (isConsultation ? 'Consultation request' : 'Investment pack request'),
          development: developmentName,
          request_type: isConsultation ? 'Consultation' : 'Investment Pack',
          _subject: subject,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !isFormSubmitSuccess(data.success)) {
        throw new Error(typeof data.message === 'string' ? data.message : 'Failed to send');
      }
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please WhatsApp us or email directly.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-blue-900 mb-2">Request sent</h3>
        <p className="text-gray-600">
          Thank you. Our team will contact you shortly about {developmentName}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold text-blue-900 mb-4">{heading}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full name *"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
        />
        <input
          required
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address *"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
        />
      </div>
      <input
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Phone / WhatsApp"
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
      />
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={3}
        placeholder={
          isConsultation
            ? 'Tell us about your budget, timeline, or questions…'
            : 'Any specific unit types or questions for the investment pack…'
        }
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
      />
      {errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors"
      >
        <Send className="w-5 h-5" />
        {status === 'loading' ? 'Sending…' : heading}
      </button>
    </form>
  );
}
