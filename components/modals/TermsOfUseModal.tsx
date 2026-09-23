import { ModalProps } from '../../types/modal'
import Modal from '../shared/Modal'
import { useTranslation } from 'next-i18next'
import Button from '@components/shared/Button'

const TermsOfUseModal = ({ isOpen, onClose }: ModalProps) => {
  const { t } = useTranslation('common')

  return (
    <Modal isOpen={isOpen} onClose={onClose} disableOutsideClose hideClose>
      <>
        <h2 className="mb-2 text-center">{t('accept-terms')}</h2>
        <p className="mb-6 text-center">{t('agree-and-continue')}</p>
        <Button className="w-full" onClick={onClose} size="large">
          {t('agree-and-continue')}
        </Button>
      </>
    </Modal>
  )
}

export default TermsOfUseModal
