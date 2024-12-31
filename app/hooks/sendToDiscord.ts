export async function sendToDiscord(message: string): Promise<void> {
    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
  
    if (!webhookUrl) {
      console.error("Discord Webhook URL is not defined in environment variables.");
      return; 
    }
  
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
        }),
      });
    } catch (error) {
      console.error("Failed to send message to Discord:", error);
    }
  }
  