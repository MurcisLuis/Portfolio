import {$, component$, useStore,useVisibleTask$} from "@builder.io/qwik";

export const ContactForm = component$(() => {
   //Esto equivale a useState de React, realmente a dos useState
  const store = useStore({
    result: '',
    showAlert: false,
  });

  const handleSubmit=$(async(event: SubmitEvent) => {
    const target = event.target as HTMLFormElement;
    store.result = 'Sending....';
    const formData = new FormData(target);
    formData.append('access_key', `${import.meta.env.PUBLIC_MAIL_KEY}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      store.result = 'Form Submitted Successfully';
      target.reset();
    } else {
      console.log('Error', data);
      store.result = data.message;
    }
    store.showAlert = true;
    setTimeout(() => store.showAlert = false, 3000); // Alert disappears after 3 seconds
    target.reset();
  },
  );
  //Esto equivale a UseEffect
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const timeoutId = setTimeout(() => {
      store.showAlert = false;
    }, 3000); // Automatically hide the alert after 3 seconds

    return () => clearTimeout(timeoutId); // Cleanup function to clear the timeout when component unmounts or effect reruns
  });

  return (
    <div class="relative col-span-6">
     <form class="space-y-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/90 mb-4" onSubmit$={handleSubmit} preventdefault:submit>
      <h2 class="text-lg font-bold dark:text-gray-100">Contact me</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        class="w-full rounded-md p-2 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-300"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        class="w-full rounded-md p-2 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-300"
        required
      />
      <textarea
        placeholder="Your message"
        class="w-full rounded-md p-2 dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-300"
        name="message"
        rows={4}
        required
      ></textarea>
      <button type="submit" class="rounded-md bg-indigo-600 text-white py-2 hover:bg-indigo-700 px-8 w-full dark:bg-indigo-700 dark:hover:bg-indigo-800">Send Message</button>
    </form>
    {store.showAlert && (
        <div class="absolute top-0 left-0 right-0 mt-[-50px] flex justify-center">
          <span class="px-4 py-2 rounded bg-white shadow-lg text-sm">{store.result}</span>
        </div>
      )}
    </div>
  );
});

