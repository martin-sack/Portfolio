// Simple toast hook placeholder
export function useToast() {
  return {
    toast: ({ title, description }: { title: string; description: string }) => {
      console.log(`Toast: ${title} - ${description}`);
      // In a real app, this would show a toast notification
    }
  };
}