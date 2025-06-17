import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { mockClients } from '@/data/mockData';

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewProjectModal({ isOpen, onClose }: NewProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    deadline: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('Funcionalidade em desenvolvimento - Este é apenas um protótipo visual');
    onClose();
  };

  const handleCancel = () => {
    setFormData({ name: '', client: '', deadline: '', description: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[2000] opacity-100 visible transition-all duration-300">
      <div className="bg-white rounded-xl p-8 max-w-md w-[90%] max-h-[80vh] overflow-y-auto transform translate-y-0 transition-transform duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Nova Atividade Retail</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded transition-colors duration-300"
          >
            <X size={18} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Nome da Atividade
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Ex: Auditoria de Estoque, Campanha Promocional"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full"
            />
          </div>
          
          <div>
            <Label htmlFor="client" className="block mb-2 font-medium text-gray-700">
              Loja/Cliente
            </Label>
            <Select value={formData.client} onValueChange={(value) => setFormData({ ...formData, client: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma loja" />
              </SelectTrigger>
              <SelectContent>
                {mockClients.map((client) => (
                  <SelectItem key={client} value={client}>
                    {client}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="deadline" className="block mb-2 font-medium text-gray-700">
              Prazo
            </Label>
            <Input
              id="deadline"
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="w-full"
            />
          </div>
          
          <div>
            <Label htmlFor="description" className="block mb-2 font-medium text-gray-700">
              Descrição da Atividade
            </Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Descreva as tarefas e objetivos da atividade"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-3 justify-end mt-8">
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-[hsl(38,95%,56%)] hover:bg-[hsl(38,95%,50%)] text-white">
              Criar Atividade
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
