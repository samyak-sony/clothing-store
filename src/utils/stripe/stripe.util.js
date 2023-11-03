import { loadStripe } from "@stripe/stripe-js";
// load stripe is what runs in order for us to know that this is our stripe instance
export const stripePromise=loadStripe(`pk_test_51O8EfYSEzLKXEZNP78Y7Wbd5aVlyCokvtSSsyaUZKMGb0pYzlvaVpoeGMqjNBPO0RfJ2syLfqQVDNxmrx6QIrtVc00ehLWWgh0`);

 