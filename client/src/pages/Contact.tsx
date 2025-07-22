import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const quoteRequestSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Service type is required'),
  message: z.string().min(10, 'Please provide project details (minimum 10 characters)')
});

type QuoteRequestForm = z.infer<typeof quoteRequestSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const quoteForm = useForm<QuoteRequestForm>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    }
  });



  const quoteRequestMutation = useMutation({
    mutationFn: async (data: QuoteRequestForm) => {
      const response = await apiRequest('POST', '/api/quote', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Sent",
        description: "Thank you for your quote request. We will contact you within 24 hours.",
      });
      quoteForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    }
  });



  const onQuoteSubmit = (data: QuoteRequestForm) => {
    quoteRequestMutation.mutate(data);
  };



  const serviceOptions = [
    { value: 'supply-chain', label: t('services.supplyChain.title') },
    { value: 'procurement', label: t('services.procurement.title') },
    { value: 'documentation', label: t('services.documentation.title') },
    { value: 'market-analysis', label: t('services.analysis.title') },
    { value: 'partnership', label: t('services.partnership.title') },
    { value: 'risk-management', label: t('services.risk.title') }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-navy-800 text-white h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">{t('contact.information')}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="text-blue-200 mt-1 h-5 w-5" />
                    <div>
                      <div className="font-medium">{t('contact.email')}</div>
                      <a href="mailto:kazmirchuk.o.life@gmail.com" className="text-blue-200 hover:text-white">
                        kazmirchuk.o.life@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="text-blue-200 mt-1 h-5 w-5" />
                    <div>
                      <div className="font-medium">{t('contact.phone')}</div>
                      <a href="tel:+12044309931" className="text-blue-200 hover:text-white">
                        +1 204 430 9931
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-200 mt-1 h-5 w-5" />
                    <div>
                      <div className="font-medium">{t('contact.address')}</div>
                      <div className="text-blue-200">
                        Burrard Building, 1111 - 1030 West Georgia<br />
                        Vancouver, BC, V6E-2Y3, Canada
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-blue-200 mt-1 h-5 w-5" />
                    <div>
                      <div className="font-medium">{t('contact.businessHours')}</div>
                      <div className="text-blue-200">
                        {t('contact.mondayFriday')}<br />
                        {t('contact.saturday')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Linkedin className="text-blue-200 mt-1 h-5 w-5" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <a href="https://linkedin.com/company/alta-trade-ltd" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
                        Alta Trade Ltd
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quote Request Form */}
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('contact.quote.title')}</h3>
                <Form {...quoteForm}>
                  <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={quoteForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.quote.fullName')} *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={quoteForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.quote.email')} *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={quoteForm.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.quote.company')}</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={quoteForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.quote.phone')}</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (xxx) xxx-xxxx" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={quoteForm.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.quote.service')} *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('contact.quote.selectService')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={quoteForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.quote.details')} *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4}
                              placeholder={t('contact.quote.detailsPlaceholder')}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-navy-800 hover:bg-navy-700"
                      disabled={quoteRequestMutation.isPending}
                    >
                      {quoteRequestMutation.isPending ? 'Sending...' : t('contact.quote.submit')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </div>
  );
}
