import { useMutation, useQueryClient } from '@tanstack/react-query';
import RootStore from '../../../store/RootStore';
import Button from '../../ui/Button/Button';
import { fetchLogout } from '../../../api/Auth';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';
import './MyAccountSettings.scss';

const MyAccountSettings = observer(() => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const user = RootStore.auth.user;
  const logoutMutation = useMutation({
    mutationKey: ['logout'],
    mutationFn: fetchLogout,
    onSuccess() {
      navigate('/');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  });

  return !user ? null : (
    <div className='my-account-settings'>
      <div className="my-account-settings__infos">
        {/* TODO */}
      </div>
      <Button onClick={() => logoutMutation.mutate()} loading={logoutMutation.isPending}>
        Выйти из аккаунта
      </Button>
    </div>
  )
})

export default MyAccountSettings;