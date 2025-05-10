'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export function NewsFilters() {
  const { t } = useLanguage();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const categories = [
    { id: 'city', label: 'Хотын мэдээ' },
    { id: 'events', label: 'Үйл явдлууд' },
    { id: 'weather', label: 'Цаг агаар' },
    { id: 'currency', label: 'Валютын ханш' },
    { id: 'fuel', label: 'Шатахууны үнэ' },
    { id: 'food', label: 'Хүнсний бүтээгдэхүүний үнэ' },
  ];
  
  const importance = [
    { id: 'high', label: 'Чухал' },
    { id: 'medium', label: 'Энгийн' },
    { id: 'low', label: 'Ердийн' },
  ];
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };
  
  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder={t('search')}
            className="pl-9"
          />
        </div>
        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ангилал" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Эрэмбэлэх" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Хамгийн шинэ</SelectItem>
              <SelectItem value="oldest">Хамгийн хуучин</SelectItem>
              <SelectItem value="important">Чухлын зэрэг</SelectItem>
            </SelectContent>
          </Select>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Шүүлтүүр</SheetTitle>
                <SheetDescription>
                  Хүссэн шүүлтүүрээ сонгоно уу
                </SheetDescription>
              </SheetHeader>
              
              <div className="grid gap-6 py-6">
                <div className="space-y-3">
                  <Label>Ангилал</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(category => (
                      <Button 
                        key={category.id}
                        variant="outline"
                        className="justify-start"
                        onClick={() => {
                          if (!activeFilters.includes(category.label)) {
                            setActiveFilters([...activeFilters, category.label]);
                          } else {
                            removeFilter(category.label);
                          }
                        }}
                        data-active={activeFilters.includes(category.label)}
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label>Чухлын зэрэг</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {importance.map(item => (
                      <Button 
                        key={item.id}
                        variant="outline"
                        className="justify-start"
                        onClick={() => {
                          if (!activeFilters.includes(item.label)) {
                            setActiveFilters([...activeFilters, item.label]);
                          } else {
                            removeFilter(item.label);
                          }
                        }}
                        data-active={activeFilters.includes(item.label)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label>Хугацаа</Label>
                  <div className="space-y-2">
                    <Button 
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => {
                        const filter = 'Өнөөдөр';
                        if (!activeFilters.includes(filter)) {
                          setActiveFilters([...activeFilters, filter]);
                        } else {
                          removeFilter(filter);
                        }
                      }}
                      data-active={activeFilters.includes('Өнөөдөр')}
                    >
                      Өнөөдөр
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => {
                        const filter = 'Энэ 7 хоног';
                        if (!activeFilters.includes(filter)) {
                          setActiveFilters([...activeFilters, filter]);
                        } else {
                          removeFilter(filter);
                        }
                      }}
                      data-active={activeFilters.includes('Энэ 7 хоног')}
                    >
                      Энэ 7 хоног
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => {
                        const filter = 'Энэ сар';
                        if (!activeFilters.includes(filter)) {
                          setActiveFilters([...activeFilters, filter]);
                        } else {
                          removeFilter(filter);
                        }
                      }}
                      data-active={activeFilters.includes('Энэ сар')}
                    >
                      Энэ сар
                    </Button>
                  </div>
                </div>
              </div>
              
              <SheetFooter>
                <Button onClick={() => setActiveFilters([])}>Цэвэрлэх</Button>
                <Button type="submit">Хэрэглэх</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {activeFilters.map(filter => (
            <Badge key={filter} variant="secondary" className="px-3 py-1">
              {filter}
              <button 
                className="ml-2 text-muted-foreground hover:text-foreground"
                onClick={() => removeFilter(filter)}
              >
                ×
              </button>
            </Badge>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs h-7"
            onClick={() => setActiveFilters([])}
          >
            Бүгдийг цэвэрлэх
          </Button>
        </div>
      )}
    </div>
  );
}